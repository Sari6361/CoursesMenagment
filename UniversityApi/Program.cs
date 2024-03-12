using UniversityApi;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<UniversityDbContext>();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

//הוספת SWAGGER
builder.Services.AddSwaggerGen(options => options.SwaggerDoc("v1", new OpenApiInfo
{
    Title = "To Do API",
    Description = "An ASP.NET Core Web API for managing ToDo items"
}));

//הגדרת הרשאה כללית שפותחת את הסרבר לכל מי שיפנה אליו.
builder.Services.AddCors(options =>
{
    options.AddPolicy("Policy", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
 {
     c.SwaggerEndpoint("/swagger/v1/swagger.json", "Todo API V1");
 });
}
app.UseCors("Policy");


//--------------------------EnfPoints User------------------------------------------

//Get Users
app.MapGet("/users",async (UniversityDbContext context)=>Results.Ok(await context.Users.ToListAsync()));

//Get user by Id
app.MapGet("/users/{id}", async (UniversityDbContext context, int id) => Results.Ok(await context.Users.FindAsync(id)));

//Find user by name and password
// app.MapPut("/users/{name}", async (UniversityDbContext context, [FromBody] userLogin) =>
//     Results.Ok(await context.Users.FindAsync(u => {u.Password.equals(userLogin.password) && u.Name.equals(userLogin.name)})));

//Add user
app.MapPost("/users", async (UniversityDbContext context, User user) =>
{
    context.Add(user);
    await context.SaveChangesAsync();
    return Results.Ok(user);
});

//Update user
app.MapPut("/users/{id}", async (UniversityDbContext context, [FromBody] User user, int id) =>
{
    var user_ = await context.Users.FindAsync(id);
    if (user_ is null) return Results.NotFound();

    user_.Name = user.Name;
    user_.Password = user.Password;
    user_.Address = user.Address;
    user_.Email = user.Email;
    user_.Role = user.Role;

    await context.SaveChangesAsync();
    return Results.Ok();
});

//------------------------------EnfPoints Course-------------------------------------

//Get Courses
app.MapGet("/courses", async (UniversityDbContext context) => Results.Ok(await context.Courses.ToListAsync()));

//Get Course by Id
app.MapGet("/courses/{id}", async (UniversityDbContext context, int id) => Results.Ok(await context.Courses.FindAsync(id)));

//Add Course
app.MapPost("/courses", async (UniversityDbContext context, Course course) =>
{
    context.Add(course);
    await context.SaveChangesAsync();
    return course;
});

//Update Course
app.MapPut("/courses/{id}", async (UniversityDbContext context, [FromBody] Course course, int id) =>
{
    var course_ = await context.Courses.FindAsync(id);
    if (course_ is null) return Results.NotFound();

    course_.Name = course.Name;
    course_.CategoryId = course.CategoryId;
    course_.ImgLink = course.ImgLink;
    course_.LearningType = course.LearningType;
    course_.LecturerId = course.LearningType;
    course_.LessonsAccount = course.LessonsAccount;
    course_.Sillybus = course.Sillybus;
    course_.StartLearning = course.StartLearning;

    await context.SaveChangesAsync();
    return Results.Ok();
});

//Delete Course
app.MapDelete("/courses/{id}", async (UniversityDbContext context, int id) =>
{

    if (await context.Courses.FindAsync(id) is Course course)
    {
        context.Remove(course);
        await context.SaveChangesAsync();
        return Results.Ok();
    }
    return Results.NotFound();
});


//------------------------------EnfPoints Categories-------------------------------------

//Get all categories
app.MapGet("/categories", async (UniversityDbContext context) => Results.Ok(await context.Categories.ToListAsync()));

//Get category by Id
app.MapGet("/categories/{id}", async (UniversityDbContext context, int id) => Results.Ok(await context.Categories.FindAsync(id)));

//Add category
app.MapPost("/categories", async (UniversityDbContext context, Category category) =>
{
    context.Add(category);
    await context.SaveChangesAsync();
    return category;
});

app.Run();