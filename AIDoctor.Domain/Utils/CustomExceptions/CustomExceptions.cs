namespace AIDoctor.Domain.Utils.CustomExceptions
{
    // Custom exception classes
    public class UserLockedOutException(string? message) : Exception(message) { }
    public class UserNotConfirmedException(string? message) : Exception(message) { }
    public class TwoFactorRequiredException(string? message, IEnumerable<string> providerList) : Exception(message)
    {
        public IEnumerable<string> ProviderList { get; set; } = providerList;



    }
}
