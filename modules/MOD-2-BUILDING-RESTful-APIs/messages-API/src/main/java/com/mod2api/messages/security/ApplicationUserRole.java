package com.mod2api.messages.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.mod2api.messages.security.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    APPRENTICE(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(MESSAGE_READ, MESSAGE_WRITE,APPRENTICE_READ,APPRENTICE_WRITE));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }
}
