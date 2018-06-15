package com.creature.rpg;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.scenes.scene2d.InputEvent;
import com.badlogic.gdx.scenes.scene2d.InputListener;
import com.creature.rpg.combat.CombatController;
import com.creature.rpg.data.DataStore;

public class FightButtonActor extends TextActor {
    private DataStore ds = DataStore.getStore();
    private CombatController cc;
    public FightButtonActor() {
        super(new Texture(Gdx.files.internal("menu/fight_button.png")));
        setBounds(100,100,this.texture.getWidth(),this.texture.getHeight());
        cc = new CombatController();
        addListener(new InputListener(){
            public boolean touchDown(InputEvent event, float x, float y, int pointer, int button) {
                ((TextActor)event.getTarget()).setActive();
                ds.setIn(new String[]{"combat","actions"}, "fight");
                cc.executeCombatRound();
                System.out.println(ds.get("Combat"));
                return false;
            }
        });
    }


    @Override
    public void act(float delta) {

    }
}
