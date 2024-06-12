import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import './SelectStyles.css';
import Rugove1 from "../../assets/Rugove1.jpg";
import Erenik1 from "../../assets/Erenik1.jpg";
import Erenik2 from "../../assets/Erenik2.jpg";

function Selects() {
  const pixiContainer = useRef(null);

  useEffect(() => {
   
    const app = new PIXI.Application({ width: 900, height: 500, backgroundColor: 0x1099bb });
    pixiContainer.current.appendChild(app.view);

    
    const trailTexture = PIXI.Texture.from('https://pixijs.com/assets/trail.png');

    const historyX = [];
    const historyY = [];
    const historySize = 20; 
    const ropeSize = 100; 
    const points = [];

    
    for (let i = 0; i < historySize; i++) {
      historyX.push(0);
      historyY.push(0);
    }
   
    for (let i = 0; i < ropeSize; i++) {
      points.push(new PIXI.Point(0, 0));
    }

    
    const rope = new PIXI.SimpleRope(trailTexture, points);
    rope.blendmode = PIXI.BLEND_MODES.ADD;
    app.stage.addChild(rope);

    let mouseposition = null;

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('mousemove', (event) => {
      mouseposition = mouseposition || { x: 0, y: 0 };
      mouseposition.x = event.data.global.x;
      mouseposition.y = event.data.global.y;
    });

    app.ticker.add(() => {
      if (!mouseposition) return;

      historyX.pop();
      historyX.unshift(mouseposition.x);
      historyY.pop();
      historyY.unshift(mouseposition.y);

      for (let i = 0; i < ropeSize; i++) {
        const p = points[i];
        const ix = cubicInterpolation(historyX, (i / ropeSize) * historySize);
        const iy = cubicInterpolation(historyY, (i / ropeSize) * historySize);

        p.x = ix;
        p.y = iy;
      }
    });

    function clipInput(k, arr) {
      if (k < 0) k = 0;
      if (k > arr.length - 1) k = arr.length - 1;
      return arr[k];
    }

    function getTangent(k, factor, array) {
      return (factor * (clipInput(k + 1, array) - clipInput(k - 1, array))) / 2;
    }

    function cubicInterpolation(array, t, tangentFactor = 1) {
      const k = Math.floor(t);
      const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
      const p = [clipInput(k, array), clipInput(k + 1, array)];

      t -= k;
      const t2 = t * t;
      const t3 = t * t2;

      return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
    }

    // Load textures for the existing example
    const texture1 = PIXI.Texture.from('https://pixijs.com/assets/flowerTop.png');
    const texture2 = PIXI.Texture.from('https://pixijs.com/assets/eggHead.png');

    let isTexture1 = true;

   const character = new PIXI.Sprite(texture1);
    character.anchor.set(0.5);
    character.x = app.screen.width / 2;
    character.y = app.screen.height / 2;
    app.stage.addChild(character);

    character.interactive = true;
    character.buttonMode = true;

    character.on('pointertap', () => {
      isTexture1 = !isTexture1;
      character.texture = isTexture1 ? texture1 : texture2;
    });

    app.ticker.add(() => {
      character.rotation += 0.02;
    });

    const createCircleWithSprite = (x, y, texture, deltaX, deltaY) => {
      const graphics = new PIXI.Graphics();
      graphics.beginFill(0xff0000);
      graphics.drawCircle(0, 5, 80);
      graphics.endFill();
      graphics.x = x;
      graphics.y = y;

      const sprite = new PIXI.Sprite(texture);
      sprite.anchor.set(0.5);
      sprite.width = 100;
      sprite.height = 100;
      sprite.x = x;
      sprite.y = y;

      return { graphics, sprite, deltaX, deltaY };
    };

    const localTexture1 = PIXI.Texture.from(Rugove1);
    const localTexture2 = PIXI.Texture.from(Erenik1);
    const localTexture3 = PIXI.Texture.from(Erenik2);

    const objects = [
      createCircleWithSprite(app.screen.width / 4, app.screen.height / 2, localTexture1, 1, 1),
      createCircleWithSprite(app.screen.width / 2, app.screen.height / 2, localTexture2, -1, 1),
      createCircleWithSprite((app.screen.width / 4) * 3, app.screen.height / 2, localTexture3, 1, -1),
    ];

    objects.forEach(({ graphics, sprite }) => {
      app.stage.addChild(graphics);
      app.stage.addChild(sprite);
    });

    app.ticker.add(() => {
      objects.forEach((object) => {
        const { graphics, sprite, deltaX, deltaY } = object;

        graphics.x += deltaX;
        graphics.y += deltaY;
        sprite.x += deltaX;
        sprite.y += deltaY;

        const colorChange = (Math.sin(graphics.x * 0.01) + Math.cos(graphics.y * 0.01)) * Math.PI;
        const color = PIXI.utils.rgb2hex([Math.sin(colorChange), Math.cos(colorChange), Math.sin(colorChange + Math.PI / 2)]);
        graphics.clear();
        graphics.beginFill(color);
        graphics.drawCircle(0, 5, 80);
        graphics.endFill();

        if (graphics.x + 50 > app.screen.width || graphics.x - 50 < 0) {
          object.deltaX *= -1;
        }
        if (graphics.y + 50 > app.screen.height || graphics.y - 50 < 0) {
          object.deltaY *= -1;
        }
      });
    });

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return (
    <div name='views' className='selects'>
      <div className="container">
        <div className="selects-location">
          <div ref={pixiContainer}></div>
          <div className="overlay2"></div>
        </div>
      </div>
    </div>
  );
}

export default Selects;
