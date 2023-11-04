import React from 'react'
import '../CSS/Blogcard.css'

export default function BlogPost() {
  return (
    <div>
      <div className="cardBlog">
      <div className="row col-md-12">
      <div className="row1 col-md-6">
      <h2>Pokhara</h2>
      <h4><strong>Author:Binaya Koirala</strong></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt quos saepe doloribus adipisci facilis, placeat, vitae, ducimus harum laborum ipsum! Nisi magnam ipsa iste dolore similique, adipisci quam ut!</p>

      </div>
      <div className="row2 col-md-6">
        <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRyGtvLcz66XStLakEpmoWa5gkJvMmB0fe-60ckNVUU-INofY-1iJ_wFjowrURji-8kr6ClEvcz3NohLOEQhpALUOdtNa72" alt="" srcset="" />
      </div>
        
       
      </div>

      </div>
      <div className="cmt">
        <div className="row">
        <i class="fa fa-like" ></i>
        <i class="fa fa-comment" ></i>
        <i class="fa fa-share" ></i>

        </div>
      </div>
      <hr />
    </div>
  )
}
