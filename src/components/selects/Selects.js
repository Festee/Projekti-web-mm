import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import './SelectStyles.css';
import Rugove1 from "../../assets/Rugove1.jpg";
import Erenik1 from "../../assets/Erenik1.jpg";
import Erenik2 from "../../assets/Erenik2.jpg";

function Selects() {
  const pixiContainer = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({ width: 900, height: 500, backgroundColor: 0xF8E4EF });
    pixiContainer.current.appendChild(app.view);

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

    // const texture = PIXI.Texture.from(Erenik1);

    // const background = new PIXI.Sprite(texture);
    // background.width = app.screen.width;
    // background.height = app.screen.height;

    // app.stage.addChild(background);

    const texture1 = PIXI.Texture.from(Rugove1);
    const texture2 = PIXI.Texture.from(Erenik1);
    const texture3 = PIXI.Texture.from(Erenik2);

    const objects = [
      createCircleWithSprite(app.screen.width / 4, app.screen.height / 2, texture1, 1, 1),
      createCircleWithSprite(app.screen.width / 2, app.screen.height / 2, texture2, -1, 1),
      createCircleWithSprite((app.screen.width / 4) * 3, app.screen.height / 2, texture3, 1, -1),
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

        // Krijo një efekt gradienti për ngjyrën e rrethit
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