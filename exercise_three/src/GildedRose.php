<?php

namespace App;

class GildedRose
{
    public $name;

    public $quality;

    public $sellIn;

    public function __construct($name, $quality, $sellIn)
    {
        $this->setName($name);
        $this->setQuality($quality);
        $this->setSellIn($sellIn);
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
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



    public static function of($name, $quality, $sellIn) {
        return new static($name, $quality, $sellIn);
    }

    public function tick()
    {
        $item = $this->chooseItemTypeInstance($this->name, $this->quality, $this->sellIn);

        $item->updateData();

        $this->setQuality($item->getQuality());
        $this->setSellIn($item->getSellIn());
    }

    private function chooseItemTypeInstance($name, $quality, $sellIn)
    {
        switch ($name){
            case "Aged Brie": return new AgedBrieItem($sellIn, $quality);
            case "Backstage passes to a TAFKAL80ETC concert": return new BackStagePassesItem($sellIn, $quality);
            case "Conjured Mana Cake": return new ConjuredItem($sellIn, $quality);
            case "Sulfuras, Hand of Ragnaros": return new LegendaryItem($sellIn, $quality);
            default: return new NormalItem($sellIn, $quality);
        }
    }
}
