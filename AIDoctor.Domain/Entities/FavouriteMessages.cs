namespace AIDoctor.Domain.Entities
{
    public class FavouriteMessages
    {
        public Guid FavouriteMessageID { get; init; }
        public string UserID { get; init; } = string.Empty;
        public Guid MessegeID { get; init; }
        public DateTime CreatedDate { get; init; }

        public FavouriteMessages()
        {
            FavouriteMessageID = Guid.NewGuid();
        }
    }
}
