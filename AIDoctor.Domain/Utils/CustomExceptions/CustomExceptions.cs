using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AIDoctor.Domain.Utils.CustomExceptions
{
    // Custom exception classes
    public class UserLockedOutException(string? message) : Exception(message) { }
    public class UserNotConfirmedException(string? message) : Exception(message) { }
    public class TwoFactorRequiredException(string? message) : Exception(message) { }
}
