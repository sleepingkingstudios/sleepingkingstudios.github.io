---
nextArticleSlug: 'combat_basics'
prevArticleSlug: 'task_resolution'
---

# Pipes and Plumbers

<p>
  <span class="pull-right">
    <a href="{{ page.nextArticleSlug }}.html">
      Next Article

      <i class="fa fa-fw fa-arrow-right"></i>
    </a>
  </span>

  <span>
    <a href="{{ page.prevArticleSlug }}.html">
      <i class="fa fa-fw fa-arrow-left"></i>

      Previous Article
    </a>
  </span>
</p>

Last time, we talked about task resolution and introduced the linchpin of our system - the Check. To perform a check, simply roll two dice, add the results together, and compare to a target number or "Difficulty". Easy, right? But, not every character is the same. Some are better at attacking, some at dodging, and some at casting magic spells. How can we take a character's or creature's level of ability into account?

## Attributes

Enter Attributes. In the Pipes and Plumbers system, each character and creature has a set of attributes, which are numerical values that represent how good that creature is at various things (from now on, we'll use "creature" as a general term to include player characters, NPCs, monsters, etc). Each creature has the following attributes:

- **Physical Attack:** How strong the creature is at dishing out damage with physical attacks, such as throwing a punch, swinging a Hammer, or kicking a Koopa Shell. A higher value means the attack is more likely to succeed, and more likely to inflict critical damage.
- **Physical Defense:** How well the creature can shrug off physical attacks. A higher value means the attack is less likely to succeed, or to inflict critical damage.
- **Magical Attack:** How strong the creature is at casting magic spells and using special abilities, such as shooting fireballs after eating a Fire Flower or casting Bolt or Drain. A higher value means the attack is more likely to succeed, and to inflict critical damage.
- **Magical Defense:** How well the creature can resist magic spells and abilities. A higher value means the ability is less likely to succeed, or to inflict critical damage.
- **Speed:** How fast and reactive the creature is. A higher value means the creature can act sooner in battle. Under certain circumstances, a creature can use Speed in place of Physical Defense.
- **Hit Points:** How much damage the creature can take and still keep going.
- **Flower Points:** Used to power spells and special attacks.

So, each creature has seven attribute values. Let's put aside bonuses or penalties from equipment, abilities, and effects for now, and consider only the base attribute values inherent to that creature. With that caveat in mind, each creature's attribute values can range from 1 to 6, with an average value of 3.

Why 3? To make the math easier, actually. If you look back at the details for the Check, the average result of a check is 7. If you add the average attribute value and the average check roll, then the average result of a check is 10 - informally, that means that an average creature has roughly 50-50 odds of succeeding at a check difficulty of 10. So, we can use 10 as our baseline Difficulty.

### Attributes and Checks

Speaking of checks, how do we use attributes to modify our check results? Simple - when you roll a check that's related to a creature's attribute, just add the value for that attribute to the check roll. That sum becomes the new check result to compare against the check difficulty.

*Example:* Mario is fighting through Bowser's Keep and trips a fireball trap! The fireball is a magical attack with a Difficulty of 13. Mario's player rolls a check and gets a 2 and a 6, for a roll of 8. The player adds Mario's magical defense value, which is 4, for a total of 12. Not good enough! Mario takes 2 damage from the fireball.

That should just about cover Attributes for now, although we'll be revisiting Hit Points and Flower Points when we cover damage and special abilities, respectively. Next time we'll look at skills and special abilities.

<p>
  <span class="pull-right">
    <a href="{{ page.nextArticleSlug }}.html">
      Next Article

      <i class="fa fa-fw fa-arrow-right"></i>
    </a>
  </span>

  <span>
    <a href="{{ page.prevArticleSlug }}.html">
      <i class="fa fa-fw fa-arrow-left"></i>

      Previous Article
    </a>
  </span>
</p>

[<i class="fa fa-fw fa-home"></i> Back to Home](/)
|
[<i class="fa fa-fw fa-file"></i> Back to Articles](/articles)
