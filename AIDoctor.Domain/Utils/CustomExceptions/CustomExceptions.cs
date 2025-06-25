namespace AIDoctor.Domain.Utils.CustomExceptions
{
    // Custom exception classes
    public sealed class UserLockedOutException(string? message) : Exception(message) { }
    public sealed class UserNotConfirmedException(string? message) : Exception(message) { }
    public sealed class TwoFactorRequiredException(string? message, IEnumerable<string> providerList) : Exception(message)
    {
        public IEnumerable<string> ProviderList { get; set; } = providerList;
    }
    public sealed class UserAlreadyRegistered() : Exception("User Already Registered with this email");
}
