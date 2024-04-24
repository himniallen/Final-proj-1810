using System;
using System.Collections.Generic;
using static System.Random;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/RandomWeaponWithLevel", (int level) =>
{
    Weapon weapon = new Weapon(level);
    return weapon;
});
app.MapGet("/RandomWeapon", () =>
{
    Weapon weapon = new Weapon();
    return weapon;
});

app.MapGet("/WeaponRarities", () =>
{
    if (Weapon.Qualities.Count < 8)
    {
        Weapon.Qualities =
        [
            WeaponQuality.Common,
            WeaponQuality.Brother,
            WeaponQuality.Uncommon,
            WeaponQuality.Rare,
            WeaponQuality.Epic,
            WeaponQuality.Legendary,
            WeaponQuality.Nuke,
            WeaponQuality.Kakashi,
            WeaponQuality.Banana,
        ];
    }

    return Weapon.Qualities;
});

app.MapGet("/WeaponTypes", () =>
{
    if (Weapon.Types.Count < 6)
    {
        Weapon.Types =
        [
            WeaponType.Sword,
            WeaponType.Axe,
            WeaponType.Bow,
            WeaponType.Staff,
            WeaponType.Dagger,
            WeaponType.Banana
        ];
    }

    return Weapon.Types;

});

app.Run();

public class Weapon
{
    public WeaponType TypeOfWeapon { get; set; }
    public WeaponQuality QualityOfWeapon { get; set; }

    public Weapon()
    {
        Random random = new Random();
        TypeOfWeapon = (WeaponType)random.Next(Enum.GetValues(typeof(WeaponType)).Length);
        QualityOfWeapon = (WeaponQuality)random.Next(Enum.GetValues(typeof(WeaponQuality)).Length);
    }

    public Weapon(int level)
    {
        Random random = new Random();
        TypeOfWeapon = (WeaponType)random.Next(Enum.GetValues(typeof(WeaponType)).Length);
        if (Enum.IsDefined(typeof(WeaponQuality), level))
        {
            QualityOfWeapon = (WeaponQuality)level;
        }
        else
        {
            QualityOfWeapon = (WeaponQuality)2;
        }
    }
    public static List<WeaponQuality> Qualities = new List<WeaponQuality>();
    public static List<WeaponType> Types = new List<WeaponType>();


}

public enum WeaponType { Sword, Axe, Bow, Staff, Dagger, Banana };
public enum WeaponQuality { Common, Brother, Uncommon, Rare, Epic, Legendary, Nuke, Kakashi, Banana };


public class Armor
{
    int durability { get; set; }

    WeaponQuality quality { get; set; }

    public Armor(int qualityAttempt)
    {
        if (qualityAttempt <= 8)
        {

            bool parsed = false;
            if (Enum.IsDefined(typeof(WeaponQuality), qualityAttempt))
            {
                Random random = new Random();

                quality = (WeaponQuality)qualityAttempt;
                durability = qualityAttempt * random.Next(2, 10) + 8;
            }
            else
            {
                    quality = WeaponQuality.Common;
                    durability = 5;
            }

        }


    }

}