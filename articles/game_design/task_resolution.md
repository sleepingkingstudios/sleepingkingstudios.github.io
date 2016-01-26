---
---

# Game Design

## Thoughts on Task Resolution

I'd like to take a little break from building the Pipes and Plumbers mini-system, and look forward a bit to the actual, full-fledged game system for which Pipes and Plumbers is an incunabular work. Specifically, I'd like to examine task resolution in more detail.

Arguably, the task resolution heuristic is the single most important piece of any game system. Every single time a character attempts a challenge, whether that is finding a simple trap, climbing a rope above a chasm of lava or shooting the dread dragon in the single unarmored patch on its breast, the task resolution mechanic is called to the fore. Done properly, it should be all but invisible, a gaming equivalent of muscle memory; done incorrectly, it adds friction and confusion (but my character gets a +2 versus pit traps! if I fail the check, does my character fall or simply not progress? does hitting the unarmored spot count as a called shot, and if so, why can't I called shot a goblin or troll?).

### The Random Element

This is largely tangential to the overall question, but we should still take a moment and acknowledge that a key element of a task resolution heuristic is some source of randomness. Like board games, many tabletop games employ rolled dice, but there are other alternatives. Some games, especially Western-themed games (in the sense of the Wild West, not in the sense of anything geographically north and west of, say, Constantinople) employ a deck of cards. On the other hand, some live-action roleplaying games use a quick game of rock-paper-scissors to resolve disputes.

Other systems replace randomness with resource allocation. For example, suppose that you have a certain number of points to allocate to your actions across the course of a day. In these systems, tactical tension (can/will I succeed at this task) is exchanged for strategic tension (will I have enough left if I need it later). These systems give the players a welcome element of agency in their characters' fate, but are vulnerable to resource hoarding and out-of-game thinking.

In all of these cases, the task resolution can be divided into two (largely) distinct parts - first, generating a result, and second, interpreting that result within the context of the game.

### The Check

The most common task resolution mechanic is the Check. There is of course a great deal of variance in the details, but in almost all cases the check boils down to rolling one or more dice (you can substitute another source of randomness if desired), and either comparing the result to a fixed number or to the result of the opposing player or the game runner. Some of the variations have interesting properties, such as changing the size of the dice rather than granting fixed bonuses, but for our purposes we'll look specifically at rolling two six-sided dice, adding them together, adding any numeric bonuses and subtracting penalties, and comparing to a fixed result or to an opposing result. You'll notice that this is the task resolution mechanic for Pipes and Plumbers.

#### Adding Complications

Ninety-five percent of the time, this heuristic of roll, add, and compare works great. It has the advantages of both simplicity and flexibility, and depending on the details can have certain desirable probabilistic properties relating to mean values and variance. There is, however, one key situation where a traditional check falls apart: what happens when a player wants to try something that makes it harder to succeed, but results in a better outcome?

Here's an example, let's say from a space- and military-themed game. Two characters are locked in a mock dogfight in an asteroid field (assume we're using fiction-style dense asteroids). Rather than try and track the exact positions of the fighters through six degrees of freedom, the players are using a loose dogfight model: each round, the players make opposed Flight checks to determine whether the player can make a shot, or loop around behind his opponent, and so on.

The characters are pretty evenly matched, so one of the players decides to perform a tricky slingshot maneuver around a large asteroid to catch his opponent by surprise. The question then becomes, how do we model this with the basic opposed check mechanic? The maneuver is tricky, so it should be harder to pull off than normal flying, right? That suggests that the character should suffer a penalty to his check. On the other hand, pulling the trick off should grant him a big advantage over his opponent, and that suggests the character should actually receive a *bonus*.

#### Chaining Checks

The solution, of course, is to separate the actions into two separate checks. First, the pilot makes a single Flight check against a set Difficulty to represent trying the tricky maneuver. Then, depending on the result of that check, the pilot can gain a penalty or bonus on the opposed check to gain advantage over the opponent. On the other hand, a failed trick could set the pilot back, and a badly failed check could even result in a crash into the asteroid.

This approach has both bases covered - the pilot must succeed at a difficult check to pull of the maneuver, but will gain a big bonus to the opposed check (and a big advantage over her opponent). And, of course, this approach can be generalized to other situations. Imagine a swashbuckler that wishes to swing on a chandelier to launch an aerial attack on the evil duke. In this case, the swashbuckler must make a successful Acrobatics check; on a failure, the character botches the attack (or even falls and takes damage), but on a success gains a bonus to the attack itself.

### The Multi-Check Approach

If we generalize this approach a little more, however, we can resolve some of the inconsistencies inherent in a standard single-check system. Consider two classic cases: one, a mace-wielding warrior swings her weapon at a foe, and two, a be-robed sorcerer invokes a blazing fireball. Traditionally, the two cases are handled rather differently. The warrior's player makes a check using her attack value, compared to a static difficulty based on the target's defense value. Conversely, the target of the fireball must make a resistance check to reduce or avoid the damage and other effects of the spell. In one case, the source of the effect is responsible for determining success; in the other, the target of the effect is responsible.

Inconsistency isn't always a bad thing, of course - otherwise, it would be difficult to have a real variety of options. But for a core mechanic such as this, it raises questions whenever something blurs the line between the two categories, or is added outside of either. Suppose the sorcerer learns a spell that fires a razor-edged icicle at an opponent. Should the sorcerer make the check to succeed, like an attack? Or should it be treated like a fireball, and the target must make a check to dodge? What about a psychic character that sends a mental stab of pure mind energy to incapacitate a foe?

#### Implicit Checks

My solution is to create a system that allows for flexibility, but has a consistent underpinning. The key is what I am for now calling implicit checks. In short, performing most such tasks actually requires two or three separate steps - but, unless there is specific reason to perform each step, most of the time all but one step is just assumed to succeed. Let's look at each of our examples in turn.

For our mace-wielding warrior, what we're actually doing is two steps - one is to determine whether or not the attack succeeds, and the other to determine the results. That first step is the attack check. In the case of a basic attack, however, the effect is pre-ordained - a couple of points of damage. No result check is necessary. Conversely, if the attack inflicted bleeding on a successful hit, the target might be entitled to a resist check to avoid the bleeding condition. Likewise, imagine that the warrior was under a friendship spell. She would have to succeed at a mental resistance check first before she could attempt the attack.

Now let's consider our fireball-tossing sorcerer. Again, what we're actually doing is performing two steps. First, the sorcerer is determining whether or not the spell was successfully cast. Most of the time, however, we just assume that the spell worked, absent specific reasons to force a check. The spell casting check, therefore, is implicit. Then, the target must make a physical resistance check to reduce or avoid the damage from the fireball. So, unlike the mace attack, it is the first step that is implicit - again, in most cases. Suppose that the sorcerer was attempting to cast from the back of a galloping horse, or during a storm with strong winds and hail - in either case, conditions make it harder to cast spells successfully, so the player must make a successful check to make the spell work.

In both of our scenarios, the action resolution can be divided into two distinct steps. First, we determine whether or not the action was successful - the “does it work?” step. Then, if the action succeeded, we determine what results - the “what are the results?” step. Note that in both cases, only a single check is needed to resolve the action under ordinary circumstances. But, by formalizing the underlying process we have a framework with which to work when the circumstances are not ordinary, and by using implicit checks to fill in unnecessary steps, we streamline the process and keep things as simple as possible for most uses.

[<i class="fa fa-fw fa-home"></i> Back to Home](/)
|
[<i class="fa fa-fw fa-file"></i> Back to Articles](/articles)
