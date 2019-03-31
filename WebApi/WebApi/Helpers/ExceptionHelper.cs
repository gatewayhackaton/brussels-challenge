using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.DB;

namespace WebApi.Helpers
{
    public class ExceptionHelper
    {
        public void Error(Exception ex, string Function)
        {
            try
            {
                using (var context = new FeedbackEntities())
                    context.ErrorException.Add(new ErrorException()
                    {
                        ExceptionTime = DateTime.Now,
                        ExceptionTitle = string.IsNullOrEmpty(Function) ? "General exception" : Function,
                        Message = ex.Message,
                        StackTrace = ex.StackTrace,
                        Source = ex.Source,
                        HelpLink = ex.HelpLink,
                        HResult = ex.HResult
                    });
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}