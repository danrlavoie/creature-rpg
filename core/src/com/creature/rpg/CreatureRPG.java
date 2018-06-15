package com.creature.rpg;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.graphics.g2d.Sprite;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.scenes.scene2d.Actor;
import com.badlogic.gdx.scenes.scene2d.Stage;
import com.creature.rpg.combat.CombatController;
import com.creature.rpg.creature.CreatureActor;
import com.creature.rpg.creature.CreatureFactory;
import com.creature.rpg.data.DataStore;

public class CreatureRPG extends ApplicationAdapter {
	SpriteBatch batch;
	Texture img;
	private BitmapFont font;
	private Sprite fightButton;
	private Stage stage;
	private DataStore ds = DataStore.getStore();
	private CombatController cc;

	@Override
	public void create () {
		batch = new SpriteBatch();
		font = new BitmapFont();
		font.setColor(Color.BLACK);
		Actor MyActor = new FightButtonActor();
		stage = new Stage();
		Gdx.input.setInputProcessor(stage);
		stage.addActor(MyActor);
		ds.set("status","created");
		CreatureActor c3 = CreatureFactory.getCreature("BlueJay", 0, 20);
		CreatureActor c4 = CreatureFactory.getCreature("BlueJay", 1, 30);
		CreatureActor c5 = CreatureFactory.getCreature("BlueJay", 1, 40);
		CreatureActor c6 = CreatureFactory.getCreature("BlueJay", 2, 50);
	}

	@Override
	public void render () {
		Gdx.gl.glClearColor(1, 1, 1, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
		batch.begin();
		font.draw(batch, "Hello world", 200, 200);
		batch.end();
		stage.act(Gdx.graphics.getDeltaTime());
		stage.draw();

	}
	
	@Override
	public void dispose () {
		batch.dispose();
		img.dispose();
	}
}
