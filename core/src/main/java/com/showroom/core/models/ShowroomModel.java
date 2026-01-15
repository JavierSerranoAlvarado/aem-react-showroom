package com.showroom.core.models;

import java.util.List;

import com.showroom.core.beans.ShowroomBean;

/**
 * Interfaz para el componente Showroom.
 * Define las funciones para exponer los datos del Showroom a través de JSON.
 */
public interface ShowroomModel {

    public String getShowroomTitle();

    public List<ShowroomBean> getItems();
}
