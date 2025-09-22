import React, { useRef } from "react";

const UseRefTask4 = () => {
  let sec1 = useRef();
  let sec2 = useRef();
  let sec3 = useRef();
  let sec4 = useRef();
  let sec5 = useRef();
  let sec6 = useRef();
  let handleBtn1 = ()=>{
    // window.scrollIntoView()
    console.log()     
    sec1.current.scrollIntoView()
  }
  let handleBtn2 = ()=>{
    sec2.current.scrollIntoView()

  }
  let handleBtn3 = ()=>{}
  let handleBtn4 = ()=>{}
  let handleBtn5 = ()=>{}
  let handleBtn6 = ()=>{}
  return (
    <div>
      <button onClick={handleBtn1} className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn1
      </button>
      <button onClick={handleBtn2} className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn2
      </button>
      <button onClick={handleBtn3} className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn3
      </button>
      <button onClick={handleBtn4} className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn4
      </button>
      <button onClick={handleBtn5} className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn5
      </button>
      <button onClick={handleBtn6} className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn6
      </button>
      <button className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn7
      </button>
      <button className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn8
      </button>
      <button className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn9
      </button>
      <button className="mx-6 bg-amber-700 text-white px-5 py-3 rounded-sm my-2 text-2xl">
        btn10
      </button>
      <br />
      <section ref={sec1} className="p-5 border-2">
        <p>sec 1</p> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        aspernatur magnam iure perspiciatis ipsa consequuntur quis modi
        explicabo, facere at praesentium exercitationem fugiat qui eum cum quae
        ducimus, maiores porro neque, distinctio quo quia ratione. Harum soluta
        temporibus odit. Dolorem voluptatum sapiente corrupti molestiae ea iste
        amet suscipit sequi modi quasi fuga nisi sunt quos nostrum numquam harum
        excepturi asperiores unde nesciunt esse laborum, pariatur mollitia
        autem. Eligendi alias vero totam quae perferendis, praesentium illo a
        asperiores. Qui cumque nobis dignissimos in officiis natus similique,
        iusto vel quaerat mollitia unde ipsam aliquam cum dolorum sapiente
        facilis distinctio dolorem voluptatum itaque.
      </section>
      <br />
      <section ref={sec2} className="p-5 border-2">
        <p>sec 2</p> <br />
        Itaque eius harum esse quasi ex? Sunt fuga, nobis ab delectus labore
        optio dicta cum voluptatem ipsum nam? Dolores temporibus, eveniet quos
        beatae labore fugit sint placeat dolorem illo et optio minima
        repudiandae quasi eligendi, corporis sit cum odit. Veritatis, inventore
        repudiandae? Vel explicabo perspiciatis soluta odio quam, ad, similique
        doloremque eius ipsum voluptate suscipit obcaecati deserunt consequuntur
        animi illum harum. Tempore assumenda porro debitis, quam recusandae
        aliquid! Totam quisquam omnis voluptate quia obcaecati nisi cumque
        veniam unde temporibus necessitatibus, repudiandae libero et possimus
        repellat, quae quam placeat aliquid maxime ut asperiores aperiam.
        Architecto voluptatum accusantium inventore perferendis quaerat facere.
      </section>
      <br />
      <section ref={sec3} className="p-5 border-2">
        <p>sec 3</p> <br />
        Iusto a distinctio, in sint, saepe corrupti sequi at qui eos recusandae
        suscipit odio. Soluta qui accusantium repellat officiis ducimus, vitae
        enim dicta modi eaque iusto quaerat, incidunt aliquid nam quia,
        voluptatum ut libero laudantium facilis tenetur perspiciatis et
        veritatis. Enim deleniti modi labore pariatur accusantium sunt
        necessitatibus sequi tenetur? Sint fugit minus nemo, vel amet labore
        voluptates aliquam, deleniti cum id dicta maxime temporibus molestias
        animi illo esse necessitatibus maiores reprehenderit aut nihil. Sapiente
        et ducimus itaque, laboriosam obcaecati quidem sint, voluptas
        perspiciatis, vitae magnam quisquam? Ipsum assumenda repudiandae
        asperiores fuga accusantium. Ipsum voluptate enim quod reprehenderit
        velit labore?
      </section>
      <br />
      <section ref={sec4} className="p-5 border-2">
        <p>sec 4</p> <br />
        Quae, tempore vel modi corporis repellendus ullam veritatis quam ipsa,
        consequuntur corrupti dignissimos. Voluptatum necessitatibus aliquam
        nesciunt harum ipsa tempora velit, eligendi ipsam, sequi mollitia fuga
        dicta consectetur ea ratione unde labore aperiam incidunt soluta! In
        deserunt doloribus harum nesciunt aspernatur ad molestias id
        exercitationem deleniti laudantium excepturi suscipit quam voluptatem
        quas, nemo minima modi veritatis sunt est ipsa amet, officiis dolores
        aperiam voluptatum. Sunt explicabo iste sed rem. Possimus, modi. Aperiam
        aut itaque, velit rerum dolorum sunt. Cumque impedit quos numquam veniam
        nostrum reiciendis temporibus hic perspiciatis a assumenda iure eligendi
        suscipit inventore eos necessitatibus odit, molestias commodi
        perferendis!
      </section>
      <br />
      <section ref={sec5} className="p-5 border-2">
        <p>sec 5</p> <br />
        Dolorum ab corporis doloremque amet cumque dignissimos facere earum.
        Illum dignissimos eum magni rerum, dolores ipsam officiis, voluptates
        necessitatibus repellendus fugiat atque delectus minima quasi sapiente
        eaque, sed ad. Ea voluptatem quidem hic, saepe enim at cum ad
        reiciendis, quos soluta quibusdam inventore. A amet dolores delectus
        nisi numquam qui eius labore voluptatum est cum. Sit expedita unde
        assumenda dolorem accusantium libero, eius, neque commodi illum dolore
        excepturi quis. Dolores obcaecati architecto est nostrum quam in optio
        perspiciatis amet error culpa? Eum, saepe? Iusto maiores odit similique
        commodi unde repellat molestias eligendi accusamus. Suscipit deserunt,
        voluptates laborum fugit reprehenderit explicabo!
      </section>
      <br />
      <section ref={sec6} className="p-5 border-2">
        <p>sec 6</p> <br />
        Nihil, quis libero consectetur fugit ipsum repellat dolorum et illo
        architecto tempora quae rerum ut earum laborum eaque laudantium quasi
        temporibus nulla facilis debitis a fuga quos impedit. Dolore, blanditiis
        fugit. Accusamus omnis quas nam itaque, voluptate asperiores, eaque
        delectus laborum dolore voluptates soluta iusto sit, vel quo dolorem
        repudiandae et consequatur nulla ipsum totam error consectetur enim
        tempora eius. Eius dolores hic, omnis, distinctio porro obcaecati
        exercitationem sapiente non quis voluptatem saepe corporis reprehenderit
        expedita unde impedit deleniti. Reiciendis at ad aut consequatur? Ut
        quidem laudantium, enim ipsam quam, nobis reiciendis cumque vitae ab
        asperiores commodi voluptate eligendi magni?
      </section>
      <br />
      <section className="p-5 border-2">
        Aut architecto magnam, reprehenderit voluptate officia velit dicta enim
        labore ut et consequatur molestiae laborum quasi earum aperiam itaque
        expedita esse atque veritatis, odio magni doloremque, quaerat veniam
        amet. Quisquam repellendus sunt iste aliquam, quo aperiam tenetur hic
        fugit ad non voluptatibus vero architecto et tempora iusto cum veritatis
        harum fugiat! Illo voluptas nobis hic aliquid, praesentium illum
        suscipit a dolores laudantium exercitationem tempore pariatur rem atque
        temporibus cumque accusamus numquam quam totam fuga cupiditate
        dignissimos et qui ex iste. Est, qui adipisci? A, voluptas ratione
        itaque tempore fugit debitis mollitia facilis quaerat molestias
        accusamus accusantium excepturi dolor. Illo, culpa.
      </section>
      <br />
      <section className="p-5 border-2">
        Consequatur odit veritatis quasi magnam, quidem, eligendi dignissimos ut
        molestiae laudantium aliquam nam? Quisquam laudantium sit perspiciatis?
        Aut minima iure ex quia alias dolorum placeat unde numquam, ea nulla
        provident. Accusamus iure maiores dolorum inventore quam hic mollitia,
        saepe et molestias ut nemo facilis delectus optio deleniti dolores enim
        aut maxime animi atque culpa! Repudiandae quidem consectetur, non
        dolorum inventore voluptates ipsam quibusdam perferendis facere ducimus.
        Provident magni ducimus culpa deserunt suscipit voluptate iure dolor
        officiis nulla ea, neque libero quas dolore, cumque illo quaerat vel
        quidem consectetur explicabo nam? Quis est obcaecati placeat totam
        blanditiis quidem. Facilis, dolores suscipit!
      </section>
      <br />
      <section className="p-5 border-2">
        Tempore quae quo omnis nisi iste, ullam vitae vero, esse autem sunt
        doloribus excepturi neque mollitia tempora architecto! Veritatis
        aspernatur cum ipsum hic! Quos dolore aperiam et corporis, excepturi
        atque optio? Perferendis nesciunt impedit dolorum consectetur sapiente
        suscipit neque doloribus. Pariatur consequatur sint vero voluptates eius
        dolore aliquam dicta est, nulla iure facilis aliquid voluptatum odit?
        Explicabo aut laborum unde possimus modi eveniet nemo odio recusandae?
        Minus doloribus adipisci optio magnam sint beatae. Vero optio beatae
        dolorem? Officia dolores, laboriosam similique odio praesentium aliquam
        soluta error eius ducimus voluptatibus est facilis doloribus repudiandae
        culpa sunt rem animi. Reiciendis, beatae deserunt.
      </section>
      <br />
      <section className="p-5 border-2">
        Eveniet ratione sit soluta minus atque ab, totam culpa sint sapiente,
        nesciunt facilis consectetur debitis quisquam est laudantium vitae,
        saepe magni optio et rem doloribus necessitatibus. Minus at iure alias
        facere itaque sed aliquid laudantium dolores rem soluta, odio veniam
        nisi, cum placeat nam inventore quisquam doloremque tempore est
        perferendis, totam nobis? Libero numquam et ratione nesciunt! Numquam
        reiciendis eligendi obcaecati pariatur iusto labore ad repudiandae
        beatae vero explicabo deserunt minima tempora minus natus ipsam
        similique, aut earum ratione animi magnam delectus perferendis quisquam.
        Ipsa velit error quod ea sint earum pariatur accusantium architecto
        perferendis eveniet ratione nostrum, excepturi magnam.
      </section>
    </div>
  );
};

export default UseRefTask4;
