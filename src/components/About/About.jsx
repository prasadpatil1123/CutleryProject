import './About.css'
import React from 'react'
  
  export default function About() {
    return (
      <div className="container">
      <h1 className="text-center" style={{ marginTop: 50 }}>
        ABOUT
      </h1>
      <div className="row" style={{ marginTop: 50 , marginBottom:50}}>
        <div className="col-md-6 py-3 py-md-0">
          <div className="card">
            <img 
            src="https://images.unsplash.com/photo-1556908221-f685cdb3b0ea?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="" />
          </div>
        </div>
        <div className="col-md-6 py-3 py-md-0">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe
            possimus quo, quasi animi natus nulla beatae neque soluta pariatur id
            ducimus eum, sed quis enim minima? Fugiat delectus quo optio nemo
            voluptatem ullam officiis neque exercitationem tenetur eum corporis quas
            in esse blanditiis, quasi animi nam eos! Tempora deleniti eligendi magni
            ex voluptatum ut dicta nemo et consequuntur distinctio quae atque porro
            inventore assumenda, nihil odio iusto accusamus libero error nam aut, at
            praesentium cum reiciendis. Possimus consequatur obcaecati at illum in
            dolores earum vero ipsum. Ipsam vitae adipisci corrupti totam vel
            consequuntur fugiat. Perferendis fuga doloremque tempora, in eos,
            voluptates iure, optio qui modi ex ea saepe. Eum perspiciatis,
            voluptates fugiat nesciunt corrupti minima aliquam repellat, ea quasi
            natus, recusandae aut nobis modi. Commodi, alias reiciendis
            reprehenderit hic soluta consectetur corporis accusantium placeat, totam
            minima nostrum magnam dolorum aut dolore, sapiente ea. Magni est quo
            ipsam nisi iste.
          </p>
          <div id="btn4">
            <button>Read More...</button>
          </div>
        </div>
      </div>
    </div>
    
    )
  }
  