package com.mod2api.messages.security;

public enum ApplicationUserPermission {
    APPRENTICE_READ("apprentice:read"),
    APPRENTICE_WRITE("apprentice:write"),
    MESSAGE_READ("message:read"),
    MESSAGE_WRITE("message:write");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
