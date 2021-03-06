//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApi.DB
{
    using System;
    using System.Collections.Generic;
    
    public partial class Feedbacks
    {
        public System.Guid Id { get; set; }
        public System.Guid OriginCountryId { get; set; }
        public System.Guid DestinationCountryId { get; set; }
        public System.Guid GroupTypeId { get; set; }
        public System.Guid UserTypeId { get; set; }
        public System.Guid TopicId { get; set; }
        public Nullable<int> Rating { get; set; }
        public string Comment { get; set; }
        public System.DateTime RecordTime { get; set; }
    
        public virtual Countries Countries { get; set; }
        public virtual Countries Countries1 { get; set; }
        public virtual GroupTypes GroupTypes { get; set; }
        public virtual Topics Topics { get; set; }
        public virtual UserTypes UserTypes { get; set; }
    }
}
