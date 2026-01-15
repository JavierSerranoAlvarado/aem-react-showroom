package com.showroom.core.models.impl;

import java.util.Collections;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import com.showroom.core.beans.ShowroomBean;
import com.showroom.core.models.ShowroomModel;

/**
 * Implementación del Sling model para el componente Showroom.
 * Utiliza Sling Model Exporter para mostrar los datos en formato JSON,
 * lo que permite el consumo de AEM Headless por parte de React.
 */
@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        ShowroomModel.class,
        ComponentExporter.class }, resourceType = "showroom/components/showroom", defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ShowroomModelImpl implements ComponentExporter, ShowroomModel {

    private static final Logger LOG = LoggerFactory.getLogger(ShowroomModelImpl.class);

    @ValueMapValue
    private String showroomTitle;

    // Se inyecta la lista de ítems del multifield como recursos hijos,
    // adaptados automáticamente a ShowroomBean.
    @ChildResource(name = "items")
    private List<ShowroomBean> items;

    @SlingObject
    private Resource resource;

    @Override
    public String getShowroomTitle() {
        return showroomTitle;
    }

    /**
     * Devuelve la lista de productos adaptando los recursos a ShowroomBean.
     * 
     * @return Lista de ShowroomBean o lista vacía si es nula.
     */
    @Override
    public List<ShowroomBean> getItems() {
        return items != null ? items : Collections.emptyList();
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }
}
