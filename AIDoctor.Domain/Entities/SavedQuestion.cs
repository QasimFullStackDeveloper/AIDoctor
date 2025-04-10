namespace AIDoctor.Domain.Entities
{
    public class SavedQuestion
    {
        public Guid SavedQuestionID { get; init; }
        public Guid MessegeID { get; init; }
        public DateTime CreatedDate { get; init; }

        public SavedQuestion()
        {
            SavedQuestionID = Guid.NewGuid();
        }
    }
}
