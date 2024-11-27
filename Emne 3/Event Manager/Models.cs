public class User : IdentityUser
{
    public string FullName { get; set; }
    public ICollection<Registration> Registrations { get; set; }
}
public class Event
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DateTime { get; set; }
    public string Location { get; set; }
    public int Capacity { get; set; }
    public int RegistrationsCount { get; set; }
    public bool IsOpen { get; set; } = true;

    public ICollection<Registration> Registrations { get; set; }
}

public class Registration
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public string UserId { get; set; }
    public DateTime RegisteredAt { get; set; } = DateTime.UtcNow;

    public Event Event { get; set; }
    public User User { get; set; }
}
