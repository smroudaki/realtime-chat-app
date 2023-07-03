using chat_app.api.Entities;
using Microsoft.AspNetCore.SignalR;
using chat_app.api.Utils;

namespace chat_app.api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IDictionary<string, UserConnection> _userConnections;

        public ChatHub(IDictionary<string, UserConnection> userConnections)
        {
            _userConnections = userConnections;
        }

        public async Task JoinRoom(string userName)
        {
            var now = DateTime.Now;

            _userConnections[Context.ConnectionId] = new UserConnection
            {
                Name = userName,
                JoinedAt = now
            };

            await Clients.All.SendAsync("ReceiveMessage", new
            {
                from = "پیام سیستم",
                text = $"کاربر \"{userName}\" به گروه اضافه شد.",
                sentAt = now.GetPersianFormat(),
                isIncoming = true
            });

            await SendConnectedUsers();
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            if (_userConnections.TryGetValue(Context.ConnectionId, out var userConnection))
            {
                _userConnections.Remove(Context.ConnectionId);

                Clients.All.SendAsync("ReceiveMessage", new
                {
                    from = "پیام سیستم",
                    text = $"کاربر \"{userConnection.Name}\" گروه را ترک کرد.",
                    sentAt = DateTime.Now.GetPersianFormat(),
                    isIncoming = true
                });

                SendConnectedUsers();
            }
            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(string message)
        {
            if (_userConnections.TryGetValue(Context.ConnectionId, out var userConnection))
            {
                var sentAt = DateTime.Now.GetPersianFormat();

                await Clients.Caller.SendAsync("ReceiveMessage", new
                {
                    from = userConnection.Name,
                    text = message,
                    sentAt,
                    isIncoming = false
                });
                await Clients.AllExcept(Context.ConnectionId).SendAsync("ReceiveMessage", new
                {
                    from = userConnection.Name,
                    text = message,
                    sentAt,
                    isIncoming = true
                });
            }
        }

        public Task SendConnectedUsers()
        {
            return Clients.All.SendAsync("ReceiveConnectedUsers", _userConnections
                .Select(u => new
                {
                    name = u.Value.Name,
                    joinedAt = u.Value.JoinedAt.GetPersianFormat()
                }).OrderByDescending(u => u.joinedAt));
        }
    }
}
