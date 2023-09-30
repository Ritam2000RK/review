const review = [
    {
      id: 1,
      name: "Susan Smith",
      job: "Web Developer",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "Web Designer",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Hikaru Nakamoto",
      job: "Intern",
      img: "https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "The Boss",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
  ];
  
  
  const image = document.getElementById('person-img');
  const author = document.getElementById('author');
  const designation = document.getElementById('designation');
  const info = document.getElementById('info');
  
  const left_btn = document.getElementById('left-btn');
  const right_btn = document.getElementById('right-btn');
  const random_btn = document.getElementById('random');
  
  
  let currentItem = 0;
  
  window.addEventListener('DOMContentLoaded', function () {
      showPerson();
  });
  
  const showPerson = () => {
      const item = review[currentItem];
      image.src = item.img;
      author.innerHTML = item.name;
      designation.innerHTML = item.job;
      info.innerHTML = item.text;
  }
  
  right_btn.addEventListener('click', () => {
      currentItem++;
      if(currentItem >= review.length) {
          currentItem = 0;
      }
  
      showPerson();
  })
  
  left_btn.addEventListener('click', () => {
      if(currentItem === 0) {
          currentItem = review.length;
      }
      currentItem--;
  
      showPerson();
  })
  
  // Random reviews

  random.addEventListener('click', () => {
      currentItem = Math.floor(Math.random() * review.length);
  
      showPerson();
  })