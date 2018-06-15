package com.creature.rpg.data.selectors;

import com.creature.rpg.creature.CreatureActor;
import com.creature.rpg.data.DataNode;
import com.creature.rpg.data.DataStore;

import java.util.ArrayList;

public class CreatureSelector {
    private static DataStore ds = DataStore.getStore();

    public static ArrayList<CreatureActor> getPlayerPartyCreatures() {
        ArrayList<CreatureActor> playerCreatures = new ArrayList<CreatureActor>();
        DataNode dn = ds.getIn(new String[]{"Creatures","PlayerParty"});
        if (dn != null) {
            for (String key : dn.getNodeValues().keySet()) {
                DataNode dna = dn.get(key);
                playerCreatures.add((CreatureActor) dna.getValue());
            }
        }
        return playerCreatures;
    }
    public static ArrayList<CreatureActor> getEnemyPartyCreatures() {
        ArrayList<CreatureActor> enemyCreatures = new ArrayList<CreatureActor>();
        DataNode dn = ds.getIn(new String[]{"Creatures","EnemyParty"});
        if (dn != null) {
            for (String key : dn.getNodeValues().keySet()) {
                DataNode dna = dn.get(key);
                enemyCreatures.add((CreatureActor) dna.getValue());
            }
        }
        return enemyCreatures;
    }
    public static ArrayList<CreatureActor> getAllPartyCreatures() {
        ArrayList<CreatureActor> allCreatures = new ArrayList<CreatureActor>();
        allCreatures.addAll(getPlayerPartyCreatures());
        allCreatures.addAll(getEnemyPartyCreatures());
        return allCreatures;
    }
}
