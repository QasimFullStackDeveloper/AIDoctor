using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Entities
{
    class Subscription
    {
        public Guid SubscriptionID { get; init; }
        public required string UserID { get; init; }
        public DateTime StartDate { get; init; }
        public int PlanID { get; init; }
        public DateTime ExpirationDate { get; init; }
        public bool IsActive { get; set; }

        public Subscription()
        {
            SubscriptionID = Guid.NewGuid();
            StartDate = DateTime.UtcNow;
            ExpirationDate = DateTime.UtcNow.AddMonths(1);
            IsActive = true;
        }
    }
}
