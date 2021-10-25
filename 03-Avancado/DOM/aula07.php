<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <style>
            .conteudo h2 span
            {
                font-size: 13px;
                cursor: pointer;    
            }

            .conteudo p
            {
                overflow: hidden;
                height: 25px;
                transition: 1s;
            }

            .ExibirConteudo
            {
                height: 150px !important;
            }
        </style>
        <div class="conteudo">
            <h2>Titulo do conteudo <span> ver mais</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
            </p>

            <h2>Titulo do conteudo 2  <span> ver mais</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
            </p>

            <h2>Titulo do conteudo 3  <span> ver mais</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
            </p>

            <h2>Titulo do conteudo 4  <span> ver mais</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum nunc vestibulum metus molestie,
                vel fringilla tortor tristique. Donec vulputate.
            </p>

            <script>

                function exibir(span, conteudo)
                {
                    if(conteudo.classList.contains('ExibirConteudo'))
                    {
                        conteudo.classList.remove('ExibirConteudo');
                        span.innerHTML="ver mais";
                    }
                    else
                    {        
                        conteudo.classList.add('ExibirConteudo');
                        span.innerHTML ="Ocultar conteudo";
                    }
                }
            </script>
     
                <?php
                    echo "<script>
                    var span = document.querySelectorAll('.conteudo span');
                    var conteudo = document.querySelectorAll('.conteudo p');
                    ";
                    for($i=0; $i<5; $i++)
                    {
                        echo "span[$i].addEventListener('click', function()
                        {
                            exibir(span[$i],conteudo[$i]);
                        });";
                    }
                    echo"</script>";
                ?>
                   
        </div>
    </body>
</html>