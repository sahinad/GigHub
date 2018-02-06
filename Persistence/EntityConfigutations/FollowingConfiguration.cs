using GigHub.Models;
using System.Data.Entity.ModelConfiguration;

namespace GigHub.Persistence.EntityConfigutations
{
    public class FollowingConfiguration : EntityTypeConfiguration<Following>
    {
        public FollowingConfiguration()
        {
            HasKey(a => new { a.FollowerId, a.FolloweeId });
        }
    }
}