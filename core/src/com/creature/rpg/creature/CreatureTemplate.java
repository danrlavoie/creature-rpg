package com.creature.rpg.creature;

import java.util.Map;
import static java.util.Map.entry;

public class CreatureTemplate {
    // HPGrowth, SPGrowth, XPGrowth, ATKGrowth, DEFGrowth, AGIGrowth, WISGrowth, RESGrowth
    public static final Map<String, int[]> Bird_Growths = Map.ofEntries(
            entry("BlueJay", new int[]{40,20,20,30,25,65,20,35})
    );

    public static final Map<String, String> Species_Families = Map.ofEntries(
            entry("BlueJay", "Bird")
    );

    public static final Map<String, Map<String, int[]>> Families_Growths = Map.ofEntries(
            entry("Bird", Bird_Growths)
    );
}