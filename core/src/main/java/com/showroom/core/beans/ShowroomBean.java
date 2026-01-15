package com.showroom.core.beans;

import org.apache.sling.api.resource.Resource;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

/**
 * Modelo que representa un único producto del Showroom
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ShowroomBean {
    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private Double price;

    @ValueMapValue
    private String sku;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getFileReference() {
        return fileReference;
    }

    public Double getPrice() {
        return price;
    }

    public String getSku() {
        return sku;
    }
}
