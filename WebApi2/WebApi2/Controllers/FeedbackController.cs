using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi2.Models;
using WebApi2.Helpers;
using WebApi2.DB;

namespace WebApi2.Controllers
{
    public class FeedbackController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetCountries([FromUri]bool eu = false)
        {
            try
            {
                using (var context = new FeedbackEntities())
                {

                    var retVal = eu ?
                        context.Countries.Where(w => w.EU).AsEnumerable().Select(s => new KeyValuePair<Guid, string>(s.Id, s.Name)).ToList() :
                        context.Countries.AsEnumerable().Select(s => new KeyValuePair<Guid, string>(s.Id, s.Name)).ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, retVal);
                }
            }
            catch (Exception ex)
            {
                new ExceptionHelper().Error(ex, "GetCountries");
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpGet]
        public HttpResponseMessage GetGroupTypes()
        {
            try
            {
                using (var context = new FeedbackEntities())
                {

                    var retVal = context.GroupTypes.AsEnumerable().Select(s => new KeyValuePair<Guid, string>(s.Id, s.Name)).ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, retVal);
                }
            }
            catch (Exception ex)
            {
                new ExceptionHelper().Error(ex, "GetGroupTypes");
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpGet]
        public HttpResponseMessage GetGroupUserTypes([FromUri]Guid GroupTypeId)
        {
            try
            {
                using (var context = new FeedbackEntities())
                {

                    var retVal = context.UserTypes.Where(w => w.GroupTypeId == GroupTypeId).AsEnumerable().Select(s => new KeyValuePair<Guid, string>(s.Id, s.Name)).ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, retVal);
                }
            }
            catch (Exception ex)
            {
                new ExceptionHelper().Error(ex, "GetGroupUserTypes");
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpGet]
        public HttpResponseMessage GetTopics([FromUri]Guid GroupTypeId)
        {
            try
            {
                using (var context = new FeedbackEntities())
                {

                    var retVal = context.Topics.Where(w => !w.ParentId.HasValue && w.GroupTypes.Any(a => a.Id == GroupTypeId)).AsEnumerable().Select(s => new KeyValuePair<Guid, string>(s.Id, s.Name)).ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, retVal);
                }
            }
            catch (Exception ex)
            {
                new ExceptionHelper().Error(ex, "GetTopics");
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpGet]
        public HttpResponseMessage GetTopics([FromUri]Guid GroupTypeId, [FromUri]Guid TopicId)
        {
            try
            {
                using (var context = new FeedbackEntities())
                {

                    var retVal = context.Topics.Where(w => w.ParentId.HasValue && w.ParentId.Value == TopicId && w.GroupTypes.Any(a => a.Id == GroupTypeId)).AsEnumerable().Select(s => new KeyValuePair<Guid, string>(s.Id, s.Name)).ToList();
                    return Request.CreateResponse(HttpStatusCode.OK, retVal);
                }
            }
            catch (Exception ex)
            {
                new ExceptionHelper().Error(ex, "GetTopics");
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpPost]
        public HttpResponseMessage RecordFeedback([FromBody]FeedbackModel feedback)
        {
            try
            {
                if (feedback == null)
                    return Request.CreateResponse(HttpStatusCode.NoContent, "There was nothing passed");
                else if (string.IsNullOrEmpty(feedback.Comment) && feedback.Rating == null)
                    return Request.CreateResponse(HttpStatusCode.NotAcceptable, "You have to fill in feedback or at least give a rating");
                using (var context = new FeedbackEntities())
                {
                    context.Feedbacks.Add(new Feedbacks()
                    {
                        Id = Guid.NewGuid(),
                        OriginCountryId = feedback.OriginCountryId,
                        DestinationCountryId = feedback.DestinationCountryId,
                        GroupTypeId = feedback.GroupTypeId,
                        UserTypeId = feedback.UserTypeId,
                        TopicId = feedback.TopicId,
                        Rating = feedback.Rating,
                        Comment = feedback.Comment,
                        RecordTime = DateTime.Now
                    });
                    return context.SaveChanges() > 0 ?
                        Request.CreateResponse(HttpStatusCode.OK, "Successfully recorded") :
                        Request.CreateResponse(HttpStatusCode.NotModified, "Can not record the feedback");
                }
            }
            catch (Exception ex)
            {
                new ExceptionHelper().Error(ex, "RecordFeedback");
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
