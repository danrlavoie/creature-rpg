package com.creature.rpg.data;

public class DataStore {
    private static DataStore instance = null;
    protected DataStore() {
        root = new DataNode("ROOT", null);

    }
    public static DataStore getStore() {
        if (instance == null) instance = new DataStore();
        return instance;
    }

    private DataNode root;

    public void set(String key, Object value) {
        root = root.setValue(key, value);
        System.out.println(root);
    }

    public void setIn(String[] path, Object value) {
        root = root.setIn(path, value);
        System.out.println(root);
    }

    public DataNode getIn(String[] path) {
        return root.getIn(path);
    }

    public DataNode get(String key) {
        return root.get(key);
    }

    public void delete(String key) {
        root = root.delete(key);
        System.out.println(root);
    }

    public void deleteIn(String[] path) {
        root = root.deleteIn(path);
        System.out.println(root);
    }

    public void deleteAll(String[] keys) {
        root = root.deleteAll(keys);
        System.out.println(root);
    }

    public void clear() {
        root = new DataNode("ROOT", null);
        System.out.println(root);
    }

    @Override
    public String toString() {
        return this.root.toString();
    }
}
