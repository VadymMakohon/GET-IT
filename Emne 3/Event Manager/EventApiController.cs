[Authorize(Roles = "Admin")]
[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EventController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateEvent(Event event)
    {
        _context.Events.Add(event);
    await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetEvent), new { id = event.Id }, event);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetEvent(int id)
    {
        var eventItem = await _context.Events.FindAsync(id);
        return eventItem != null ? Ok(eventItem) : NotFound();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateEvent(int id, Event event)
    {
        if (id != event.Id) return BadRequest();

        _context.Entry(event).State = EntityState.Modified;
    await _context.SaveChangesAsync();
        return NoContent();
}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteEvent(int id)
{
    var eventItem = await _context.Events.FindAsync(id);
    if (eventItem == null) return NotFound();

    _context.Events.Remove(eventItem);
    await _context.SaveChangesAsync();
    return NoContent();
}
}
