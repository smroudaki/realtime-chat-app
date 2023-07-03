using System.Globalization;

namespace chat_app.api.Utils
{
    public static class ExtensionMethods
    {
        public static string GetPersianFormat(this DateTime dt)
        {
            var pc = new PersianCalendar();
            return $"{pc.GetYear(dt)}/{pc.GetMonth(dt)}/{pc.GetDayOfMonth(dt)} {pc.GetHour(dt)}:{pc.GetMinute(dt)}:{pc.GetSecond(dt)}";
        }
    }
}
