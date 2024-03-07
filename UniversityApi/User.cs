using System;
using System.Collections.Generic;

namespace UniversityApi;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Address { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public bool? Role { get; set; }
}
