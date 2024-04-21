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
}

public enum WeaponType { Sword, Axe, Bow, Staff, Dagger }
public enum WeaponQuality { Common,Brother, Uncommon, Rare, Epic, Legendary, Nuke,Kakashi, Banana}
