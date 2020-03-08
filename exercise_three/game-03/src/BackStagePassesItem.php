<?php
/**
 * Created by PhpStorm.
 * User: ADMIN
 * Date: 7/03/2020
 * Time: 18:40
 */

namespace App;


class BackStagePassesItem extends Item
{
    public function updateData()
    {
        $this->decreaseSellIn();

        //Si ya paso el concierto, la calidad se coloca en 0 automaticamente
        if ($this->getSellIn() < 0){
            $this->setQuality(0);
        }else{ // Sino se obtiene el factor y se aplica el incremento en calidad correspondiente
            $this->increaseQuality($this->getQualityFactor());
        }
    }

    protected function getQualityFactor()
    {
        $sellIn = $this->getSellIn();

        //Si quedan menos de 5 dias se aumenta en 3 la calidad
        if ($sellIn < 5) return 3;

        //Si quedan menos de 10 dias se aumenta en 2 la calidad
        if ($sellIn < 10) return 2;

        //En cualquier otro caso se usa el valor estandar
        return 1;
    }
}