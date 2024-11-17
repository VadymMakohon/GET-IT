[HttpPost("{eventId}/register")]
[Authorize]
public async Task<IActionResult> RegisterForEvent(int eventId)
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
    var eventItem = await _context.Events.FindAsync(eventId);

    if (eventItem == null || !eventItem.IsOpen || eventItem.RegistrationsCount >= eventItem.Capacity)
        return BadRequest("Event is not open or is full.");

    eventItem.RegistrationsCount += 1;

    var registration = new Registration
    {
        EventId = eventId,
        UserId = userId
    };

    _context.Registrations.Add(registration);
    await _context.SaveChangesAsync();

    return Ok("Successfully registered for the event.");
}
