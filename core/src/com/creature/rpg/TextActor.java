package com.creature.rpg;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Batch;
import com.badlogic.gdx.scenes.scene2d.Actor;
import com.badlogic.gdx.scenes.scene2d.InputEvent;
import com.badlogic.gdx.scenes.scene2d.InputListener;

public class TextActor extends Actor {

    public void setActive() {
        isActive = !isActive;
    }

    private boolean isActive;
    protected Texture texture;

    public TextActor(Texture texture) {
        this.texture = texture;
        isActive = false;
    }

    @Override
    public void draw(Batch batch, float alpha) {
        batch.draw(texture,this.getX(),getY());
    }

    @Override
    public void act(float delta) {
        if (isActive) System.out.println(delta);
    }
}
