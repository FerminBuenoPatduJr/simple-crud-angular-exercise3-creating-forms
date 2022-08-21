import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  id:number = 4
  editedBlog : Blog[] | undefined
  addFlag = false;
  editFlag = false;
  blogs : Blog[] = [
    {id : 1,
      title: "A Life in Books",
      description: "Books importance",
      author: "Susan Osborne",
      comments:["Good work!!!",
                "Its so easy to do",
                "Wow!"]
    },
    {id : 2,
      title: "Paris Tour",
      description: "A walk in a beautiful ity of Paris ",
      author: "Justin Hammond",
      comments:["LOvely tour",
                "True life of a Parisian ",
              "Loving the vlog man keep it up!!"
            ]

    },
    {id : 3,
      title: "The Guardian's Books Blog",
      description: "True story of a guardian.",
      author: "Lolly Sy",
      comments:["Sentimental favorites",
                "Wonderful tribute.",
              "My heart ponded so fast"]
    },
  ];

  constructor() { }

  getBlogs(){
     return this.blogs

  }

  addBlogs(blog : Blog){
    blog.id = this.id
    this.id++
    this.blogs.push(blog)
  }

  editBlogForm(id : number){
    this.editedBlog = this.blogs.filter((blog:Blog) =>{
      if(blog.id === id){
        return blog
      }
    })
    return this.editedBlog
}

editBook(newBlog : Blog){
  this.blogs.map(blog =>{
   if(blog.id == newBlog.id){
     blog.title = newBlog.title;
     blog.description = newBlog.description;
     blog.author = newBlog.author;
     blog.comments = newBlog.comments;

   }
 })

}

deleteAll(){
  return this.blogs = []
}

delete(id : number){
  this.blogs = this.blogs.filter(blog =>{
    if(blog.id !== id){
      return blog
    }
  })
  return this.blogs
}
}
