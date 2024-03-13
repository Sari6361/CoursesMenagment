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

    const USERS:User[]=[
   new User(){Id:1, Name:"SARA", Address:"Rambam 10", Email:"s@ww", Password:"123123", Role:1},
   new User(){Id:2, Name:"Tova", Address:"Rambam 10", Email:"s@ww", Password:"123123", Role:0},
   new User(){Id:3, Name:"Miriam", Address:"Rambam 10", Email:"s@ww", Password:"123123", Role:1},
   new User(){Id:4, Name:"Dan", Address:"Rambam 10", Email:"s@ww", Password:"123123", Role:0},
   new User(){Id:5, Name:"Yair", Address:"Rambam 10", Email:"s@ww", Password:"123123", Role:0},
]
}


