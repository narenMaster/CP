    class Paper {

        constructor(x, y, r) {

            var options = {
                isStatic: false,
                restitution: 0.3,
                density: 1.2,
                friction: 0.5
            }

        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
        }
        
        display() {

         var pPos = this.body.position;

            push();
            translate(pPos.x, pPos.y);
            rectMode();
            strokeWeight(5);
            stroke(0,0,0);
            ellipse(0, 0, this.r, this.r);
            
        pop();
        }
    }