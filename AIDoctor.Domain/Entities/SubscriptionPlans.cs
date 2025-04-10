using AIDoctor.Domain.Enums;

namespace AIDoctor.Domain.Entities
{
    class SubscriptionPlans
    {
        public Guid PlanID { get; init; }
        public int PlanType { get; init; }
        public decimal PlanPrice { get; init; }
        public int MaxPromptsPerDay { get; init; }

        public SubscriptionPlans()
        {
            PlanID = Guid.NewGuid();
            PlanType = (int)PlanTypes.Free;
            PlanPrice = 0.0m;
            MaxPromptsPerDay = 5;
        }
    }
}
