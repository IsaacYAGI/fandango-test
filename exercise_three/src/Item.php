<?php
/**
 * Created by PhpStorm.
 * User: ADMIN
 * Date: 7/03/2020
 * Time: 17:51
 */

namespace App;


abstract class Item
{
    private $sellIn;
    private $quality;

    private $MAX_QUALITY_ALLOWED = 50;
    private $MIN_QUALITY_ALLOWED = 0;

    /**
     * Item constructor.
     * @param $sellIn
     * @param $quality
     */
    public function __construct($sellIn, $quality)
    {
        $this->setSellIn($sellIn);
        $this->setQuality($quality);
    }

    public abstract function updateData();


    /**
     * @return mixed
     */
    public function getSellIn()
    {
        return $this->sellIn;
    }

    /**
     * @param mixed $sellIn
     */
    public function setSellIn($sellIn)
    {
        $this->sellIn = $sellIn;
    }

    /**
     * @return mixed
     */
    public function getQuality()
    {
        return $this->quality;
    }

    /**
     * @param mixed $quality
     */
    public function setQuality($quality)
    {
        $this->quality = $quality;
    }

    protected function decreaseSellIn()
    {
        $this->setSellIn($this->getSellIn() - 1);
    }

    protected function increaseQuality($factor)
    {
        $newQuality = $this->getQuality();
        $newQuality += $factor;

        //Si la nueva calidad es mayor a 50 se coloca 50
        if ($newQuality > $this->MAX_QUALITY_ALLOWED){
            $this->setQuality($this->MAX_QUALITY_ALLOWED);
        }else{//Sino se coloca el valor calculado
            $this->setQuality($newQuality);
        }
    }

    protected function decreaseQuality($factor)
    {
        //Colocamos el factor como negativo
        $factor = -$factor;

        //Incrementamos la calidad con factor negativo lo que hará que se reste
        $this->increaseQuality($factor);

        //Si la calidad obtenida es menor a 0, se coloca 0
        if ($this->getQuality() < $this->MIN_QUALITY_ALLOWED){
            $this->setQuality($this->MIN_QUALITY_ALLOWED);
        }

    }
}