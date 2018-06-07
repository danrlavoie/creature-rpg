package com.creature.rpg.data;

public class DataStoreTestDriver {
    public static void main(String[] args) {
        DataStore ds = DataStore.getStore();
        ds.set("scene", "battle");
        ds.set("stuff", 99);
        ds.set("foo", "bar");
        ds.set("bah", "baz");
        ds.setIn(new String[]{"src","com","creature","rpg"}, 666);
        ds.setIn(new String[]{"src","com","bob","foo"}, "bar");
        System.out.println(ds);
        System.out.println(ds.getIn(new String[]{"src", "com", "creature", "rpg"}).getValue());
        System.out.println(ds.get("src").getValue());
        ds.deleteIn(new String[]{"src","com"});
        ds.delete("stuff");
        System.out.println(ds);
        ds.deleteAll(new String[]{"foo", "scene"});
        System.out.println(ds);
    }
}
