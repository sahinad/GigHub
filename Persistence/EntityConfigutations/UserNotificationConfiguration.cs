using GigHub.Models;
using System.Data.Entity.ModelConfiguration;

namespace GigHub.Persistence.EntityConfigutations
{
    public class UserNotificationConfiguration : EntityTypeConfiguration<UserNotification>
    {
        public UserNotificationConfiguration()
        {
            HasKey(un => new { un.UserId, un.NotificationId });

            HasRequired(n => n.User)
                .WithMany(n => n.UserNotifications)
                .WillCascadeOnDelete(false);
        }
    }
}