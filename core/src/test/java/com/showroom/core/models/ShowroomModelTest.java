package com.showroom.core.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;

import com.showroom.core.beans.ShowroomBean;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

/**
 * Prueba unitaria para {@link ShowroomModel} utilizando AEM Mocks
 */
@ExtendWith(AemContextExtension.class)
class ShowroomModelTest {

    private final AemContext context = new AemContext();

    @BeforeEach
    void setUp() {
        // Cargamos un recurso simulado en /content/showroom
        context.load().json("/com/showroom/core/models/showroomModel/ShowroomModelTest.json", "/content/showroom");
        // Apuntamos al recurso actual
        context.currentResource("/content/showroom/jcr:content/root/responsivegrid/showroom");
    }

    @Test
    void testShowroomProperties() {
        // Adaptamos el request al Sling Model
        ShowroomModel model = context.request().adaptTo(ShowroomModel.class);

        // Validaciones generales
        assertNotNull(model);
        assertEquals("Tech Accessories Showroom", model.getShowroomTitle());

        List<ShowroomBean> items = model.getItems();
        assertNotNull(items);
        assertEquals(2, items.size());

        // Validar primer item
        ShowroomBean item1 = items.get(0);
        assertEquals("Mechanical Keyboard", item1.getTitle());
        assertEquals(999.0, item1.getPrice());
    }

}
