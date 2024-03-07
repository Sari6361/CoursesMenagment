using System;
using System.Collections.Generic;

namespace UniversityApi;

public partial class Course
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? CategoryId { get; set; }

    public int? LessonsAccount { get; set; }

    public DateOnly? StartLearning { get; set; }

    public string? Sillybus { get; set; }

    public int? LearningType { get; set; }

    public int? LecturerId { get; set; }

    public string? ImgLink { get; set; }
}
