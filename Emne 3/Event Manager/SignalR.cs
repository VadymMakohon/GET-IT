public class NotificationHub : Hub
{
    public async Task NotifyAll(string message)
    {
        await Clients.All.SendAsync("ReceiveNotification", message);
    }
}
