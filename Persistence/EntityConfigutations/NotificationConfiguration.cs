using GigHub.Models;
using System.Data.Entity.ModelConfiguration;

namespace GigHub.Persistence.EntityConfigutations
{
    public class NotificationConfiguration : EntityTypeConfiguration<Notification>
    {
        public NotificationConfiguration()
        {
            HasRequired(n => n.Gig);
        }
    }
}