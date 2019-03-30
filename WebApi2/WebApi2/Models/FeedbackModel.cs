using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi2.Models
{
    public class FeedbackModel
    {
        public Guid OriginCountryId { get; set; }
        public Guid DestinationCountryId { get; set; }
        public Guid GroupTypeId { get; set; }
        public Guid UserTypeId { get; set; }
        public Guid TopicId { get; set; }
        public int? Rating { get; set; }
        public string Comment { get; set; }
    }
}