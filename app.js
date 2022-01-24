const express = require("express");
require("dotenv").config();
const cors = require("cors");
//const dogFacts = require("./dogfacts");

const dogFacts = [
	{
		fact: "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.",
	},
	{
		fact: "Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.",
	},
	{
		fact: "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.",
	},
	{ fact: "Apple and pear seeds contain arsenic, which may be deadly to dogs." },
	{
		fact: "Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog.",
	},
	{ fact: "Dogs have sweat glands in between their paws." },
	{
		fact: 'In 2003, Dr. Roger Mugford invented the "wagometer," a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.',
	},
	{
		fact: 'Dogs have three eyelids. The third lid, called a nictitating membrane or "haw," keeps the eye lubricated and protected.',
	},
	{
		fact: "A dog’s shoulder blades are unattached to the rest of the skeleton to allow greater flexibility for running.",
	},
	{
		fact: "Puppies are sometimes rejected by their mother if they are born by cesarean and cleaned up before being given back to her.",
	},
	{
		fact: 'The phrase "raining cats and dogs" originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.',
	},
	{
		fact: "During the Middle Ages, Great Danes and Mastiffs were sometimes suited with armor and spiked collars to enter a battle or to defend supply caravans.",
	},
	{
		fact: "Pekingese and Japanese Chins were so important in the ancient Far East that they had their own servants and were carried around trade routes as gifts for kings and emperors. Pekingese were even worshipped in the temples of China for centuries.",
	},
	{
		fact: "The shape of a dog’s face suggests how long it will live. Dogs with sharp, pointed faces that look more like wolves typically live longer. Dogs with very flat faces, such as bulldogs, often have shorter lives.",
	},
	{
		fact: "After the fall of Rome, human survival often became more important than breeding and training dogs. Legends of werewolves emerged during this time as abandoned dogs traveling in packs commonly roamed streets and terrified villagers.",
	},
	{
		fact: "During the Middle Ages, mixed breeds of peasants’ dogs were required to wear blocks around their necks to keep them from breeding with noble hunting dogs. Purebred dogs were very expensive and hunting became the province of the rich.",
	},
	{ fact: "The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan." },
	{ fact: "The American Kennel Club, the most influential dog club in the United States, was founded in 1884." },
	{ fact: "The most popular male dog names are Max and Jake. The most popular female dog names are Maggie and Molly." },
	{
		fact: "Scholars have argued over the metaphysical interpretation of Dorothy’s pooch, Toto, in the Wizard of Oz. One theory postulates that Toto represents Anubis, the dog-headed Egyptian god of death, because Toto consistently keeps Dorothy from safely returning home.",
	},
	{
		fact: "Weird dog laws include allowing police offers in Palding, Ohio, to bite a dog to quiet it. In Ventura County, California, cats and dogs are not allowed to have sex without a permit.",
	},
	{
		fact: "The first dog chapel was established in 2001. It was built in St. Johnsbury, Vermont, by Stephan Huneck, a children’s book author whose five dogs helped him recuperate from a serious illness.",
	},
	{
		fact: "Those born under the sign of the dog in Chinese astrology are considered to be loyal and discreet, though slightly temperamental.",
	},
	{
		fact: "In Iran, it is against the law to own a dog as a pet. However, if an owner can prove the dog is a guard or hunting dog, this restriction doesn’t apply. Muslim reticence concerning dogs is perhaps due to the fact that rabies has always been endemic in the Middle East.",
	},
	{
		fact: "The Mayans and Aztecs symbolized every tenth day with the dog, and those born under this sign were believed to have outstanding leadership skills.",
	},
	{
		fact: "The ancient Mbaya Indians of the Gran Chaco in South America believed that humans originally lived underground until dogs dug them up.",
	},
	{ fact: 'Plato once said that "a dog has the soul of a philosopher." ' },
	{
		fact: 'French poodles did not originate in France but in Germany "poodle" comes from the German pudel or pudelhund, meaning "splashing dog". Some scholars speculate the poodle’s puffs of hair evolved when hunters shaved the poodle for more efficient swimming, while leaving the pom-poms around the major joints to keep them warm.',
	},
	{
		fact: "The name of the dog on the Cracker Jacks box is Bingo. The Taco Bell Chihuahua is a rescued dog named Gidget.",
	},
	{
		fact: "The first dogs were self-domesticated wolves which, at least 12,000 years ago, became attracted to the first sites of permanent human habitation.",
	},
	{ fact: "Dachshunds were bred to fight badgers in their dens." },
	{
		fact: "Laika, a Russian stray, was the first living mammal to orbit the Earth, in the Soviet Sputnik spacecraft in 1957. Though she died in space, her daughter Pushnika had four puppies with President John F. Kennedy’s terrier, Charlie.",
	},
	{ fact: "Dalmatians are completely white at birth." },
	{
		fact: 'The term "dog days of summer" was coined by the ancient Greeks and Romans to describe the hottest days of summer that coincided with the rising of the Dog Star, Sirius.',
	},
	{ fact: "Alexander the Great is said to have founded and named a city Peritas, in memory of his dog." },
	{
		fact: 'In ancient Greece, kennels of dogs were kept at the sanctuary of Asclepius at Epidaurus. Dogs were frequently sacrificed there because they were plentiful, inexpensive, and easy to control. During the July 25 celebration of the kunophontis "the massacre of dogs", dog sacrifices were performed to appease the ancestors of Apollo’s son, Linos, who was devoured by dogs..',
	},
	{
		fact: "Dog trainers in ancient China were held in high esteem. A great deal of dog domestication also took place in China, especially dwarfing and miniaturization.",
	},
	{
		fact: "The ancient religion Zoroastrianism includes in its religious text titled the Zend Avesta a section devoted to the care and breeding of dogs.",
	},
	{ fact: "The earliest European images of dogs are found in cave paintings dating back 12,000 years ago in Spain." },
	{
		fact: "The dog was frequently depicted in Greek art, including Cerberus, the three-headed hound guarding the entrance to the underworld, and the hunting dogs which accompanied the virgin goddess of the chase, Diana.",
	},
	{
		fact: "During the Renaissance, detailed portraits of the dog as a symbol of fidelity and loyalty appeared in mythological, allegorical, and religious art throughout Europe, including works by Leonardo da Vinci, Diego Velázquez, Jan van Eyck, and Albrecht Durer.",
	},
	{ fact: "A puppy is born blind, deaf, and toothless." },
	{ fact: "The Basenji is the world’s only barkless dog." },
	{ fact: "A dog most likely interprets a smiling person as baring their teeth, which is an act of aggression." },
	{
		fact: 'The origin of amputating a dog’s tail may go back to the Roman writer Lucius Columella’s "A.D. 4-70"} assertion that tail docking prevented rabies. ',
	},
	{
		fact: 'One of Shakespeare’s most mischievous characters is Crab, the dog belonging to Launce in the Two Gentlemen of Verona. The word "watchdog" is first found in The Tempest.',
	},
	{
		fact: "President Franklin Roosevelt created a minor international incident when he claimed he sent a destroyer to the Aleutian Islands just to pick up his Scottish Terrier, Fala, who had been left behind.",
	},
	{
		fact: "Within hours of the September 11, 2001, attack on the World Trade Center, specially trained dogs were on the scene, including German Shepherds, Labs, and even a few little Dachshunds.",
	},
	{ fact: "It costs approximately $10,000 to train a federally certified search and rescue dog." },
	{
		fact: 'The smallest dog on record was a matchbox-size Yorkshire Terrier. It was 2.5" tall at the shoulder, 3.5" from nose tip to tail, and weighed only 4 ounces.',
	},
	{
		fact: "Hollywood’s first and arguably best canine superstar was Rin Tin Tin, a five-day-old German Shepherd found wounded in battle in WWI France and adopted by an American soldier, Lee Duncan. He would sign his own contracts with his paw print.",
	},
	{ fact: "At the end of WWI, the German government trained the first guide dogs for war-blinded soldiers." },
	{
		fact: "A dog can locate the source of a sound in 1/600 of a second and can hear sounds four times farther away than a human can.",
	},
	{
		fact: "Touch is the first sense the dog develops. The entire body, including the paws, is covered with touch-sensitive nerve endings.",
	},
	{ fact: "Eighteen muscles or more can move a dog’s ear." },
	{
		fact: "The names of 77 ancient Egyptian dogs have been recorded. The names refer to color and character, such as Blackie, Ebony, Good Herdsman, Reliable, and Brave One.",
	},
	{
		fact: "In Egypt, a person bitten by a rabid dog was encouraged to eat the roasted liver of a dog infected with rabies to avoid contracting the disease. The tooth of a dog infected with rabies would also be put in a band tied to the arm of the person bitten. The menstrual blood of a female dog was used for hair removal, while dog genitals were used for preventing the whitening of hair.",
	},
	{
		fact: "In early Christian tradition, Saint Christopher, the patron saint of travelers, is sometimes depicted with a dog’s head.",
	},
	{
		fact: "The oldest known dog bones were found in Asia and date as far back as 10,000 B.C. The first identifiable dog breed appeared about 9000 B.C. and was probably a type of Greyhound dog used for hunting.",
	},
	{ fact: "There are an estimated 400 million dogs in the world." },
	{ fact: "The U.S. has the highest dog population in the world. France has the second highest." },
	{ fact: "Dog nose prints are as unique as human finger prints and can be used to identify them." },
	{ fact: "Bloodhound dogs have a keen sense of smell and have been used since the Middle Ages to track criminals." },
	{
		fact: "It is much easier for dogs to learn spoken commands if they are given in conjunction with hand signals or gestures.",
	},
	{
		fact: "Dogs in a pack are more likely to chase and hunt than a single dog on its own. Two dogs are enough to form a pack.",
	},
	{
		fact: "Dogs can see in color, though they most likely see colors similar to a color-blind human. They can see better when the light is low.",
	},
	{ fact: "Petting dogs is proven to lower blood pressure of dog owners." },
	{ fact: "Dogs have lived with humans for over 14,000 years. Cats have lived with people for only 7,000 years." },
	{
		fact: 'Zorba, an English mastiff, is the biggest dog ever recorded. He weighed 343 pounds and measured 8’ 3" from his nose to his tail.',
	},
	{
		fact: "The average dog can run about 19 mph. Greyhounds are the fastest dogs on Earth and can run at speeds of 45 mph.",
	},
	{ fact: "One female dog and her female children could produce 4,372 puppies in seven years." },
	{ fact: "The most popular dog breed in Canada, U.S., and Great Britain is the Labrador retriever." },
	{
		fact: 'Greyhounds appear to be the most ancient dog breed. "Greyhound" comes from a mistake in translating the early German name Greishund, which means "old" or "ancient dog" not from the color gray.',
	},
	{
		fact: "The oldest dog on record was an Australian cattle dog named Bluey who lived 29 years and 5 months. In human years, that is more than 160 years old.",
	},
	{
		fact: "Most experts believe humans domesticated dogs before donkeys, horses, sheep, goats, cattle, cats, or chickens.",
	},
	{
		fact: "A person standing still 300 yards away is almost invisible to a dog. But a dog can easily identify its owner standing a mile away if the owner is waving his arms.",
	},
	{
		fact: 'Dogs with big, square heads and large ears "like the Saint Bernard"} are the best at hearing subsonic sounds.',
	},
	{
		fact: "Dogs can smell about 1,000 times better than humans. While humans have 5 million smell-detecting cells, dogs have more than 220 million. The part of the brain that interprets smell is also four times larger in dogs than in humans.",
	},
	{
		fact: "Some dogs can smell dead bodies under water, where termites are hiding, and natural gas buried under 40 feet of dirt. They can even detect cancer that is too small to be detected by a doctor and can find lung cancer by sniffing a person’s breath.",
	},
	{ fact: "Dogs have a wet nose to collect more of the tiny droplets of smelling chemicals in the air." },
	{
		fact: "Dogs like sweets a lot more than cats do. While cats have around only 473 taste buds, dogs have about 1,700 taste buds. Humans have approximately 9,000.",
	},
	{
		fact: "Different smells in the a dog’s urine can tell other dogs whether the dog leaving the message is female or male, old or young, sick or healthy, happy or angry.",
	},
	{
		fact: "Male dogs will raise their legs while urinating to aim higher on a tree or lamppost because they want to leave a message that they are tall and intimidating. Some wild dogs in Africa try to run up tree trunks while they are urinating to appear to be very large.",
	},
	{
		fact: "In Croatia, scientists discovered that lampposts were falling down because a chemical in the urine of male dogs was rotting the metal.",
	},
	{
		fact: "Dogs are about as smart as a two- or three-year-old child. This means they can understand about 150-200 words, including signals and hand movements with the same meaning as words.",
	},
	{
		fact: "Countess Karlotta Libenstein of Germany left approximately $106 million to her Alsatin, Gunther III, when she died in 1992.",
	},
	{ fact: "A lost Dachshund was found swallowed whole in the stomach of a giant catfish in Berlin on July 2003." },
	{
		fact: "In Australia, a man who was arrested for drug possession argued his civil rights were violated when the drug-sniffing dog nuzzled his crotch. While the judge dismissed the charges, they were later reinstated when a prosecutor pointed out that in the animal kingdom, crotch nuzzling was a friendly gesture.",
	},
	{
		fact: 'The Beagle came into prominence in the 1300s and 1400s during the days of King Henry VII of England. Elizabeth I was fond of Pocket Beagles, which were only 9" high.',
	},
	{ fact: "The best dog to reportedly attract a date is the Golden Retriever. The worst is the Pit Bull." },
	{
		fact: 'The Akita is one of the most challenging dogs to own. Some insurance companies have even characterized it as the #1 "bad dog" and may even raise an Akita owner’s homeowner insurance costs.',
	},
	{ fact: "The Beagle and Collie are the nosiest dogs, while the Akbash Dog and the Basenji are the quietest." },
	{
		fact: "One survey reports that 33 of dog owners admit they talk to their dogs on the phone or leave messages on answering machines while they are away..",
	},
	{
		fact: "Thirty percent of all Dalmatians are deaf in one or both ears. Because bulldogs have extremely short muzzles, many spend their lives fighting suffocation. Because Chihuahuas have such small skulls, the flow of spinal fluid can be restricted, causing hydrocephalus, a swelling of the brain.",
	},
	{ fact: "The grief suffered after a pet dog dies can be the same as that experienced after the death of a person." },
	{
		fact: "There are almost 5 million dog bites per year; children are the main victims. Dog bites cause losses of over $1 billion a year.",
	},
	{
		fact: "A person should never kick a dog facing him or her. Some dogs can bite 10 times before a human can respond.",
	},
	{
		fact: "The most intelligent dogs are reportedly the Border Collie and the Poodle, while the least intelligent dogs are the Afghan Hound and the Basenji.",
	},
	{
		fact: 'One kind of Pekingese is referred to as a "sleeve" because it was bred to fit into a Chinese empress’ sleeves, which was how it was often carried around.',
	},
	{
		fact: "Is it a duck... or a dog? The Newfoundland breed has a water resistant coat and webbed feet. This dog was originally bred to help haul nets for fishermen and rescuing people at risk of drowning.",
	},
	{
		fact: 'It pays to be a lap dog. Three dogs "from First Class cabins!" survived the sinking of the Titanic – two Pomeranians and one Pekingese.',
	},
	{
		fact: 'A Beatles hit. It’s rumored that, at the end of the Beatles song, "A Day in the Life," Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.',
	},
	{ fact: "Wow, check out those choppers! Puppies have 28 teeth and normal adult dogs have 42." },
	{
		fact: "Chase that tail! Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.",
	},
	{
		fact: "Seeing spots? Or not...  Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
	},
	{
		fact: 'Dogs do dream! Dogs and humans have the same type of slow wave sleep "SWS"} and rapid eye movement "REM" and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming',
	},
	{
		fact: "No night vision goggles needed! Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark.",
	},
	{
		fact: "Pitter patter. A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute.",
	},
	{
		fact: "If your dog’s acting funny, get out the umbrella! According to a Petside.com/Associated Press poll, 72 of dog owners believe their dog can detect when stormy weather is on the way.",
	},
	{
		fact: "It’s not a fever... A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit. How much do you know about dog health? Take our Doggy First Aid Quiz!",
	},
	{ fact: "Is something wet? Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet." },
	{
		fact: 'Here’s looking at you. Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or "haw," which helps keep the eye moist and protected.',
	},
	{ fact: "Americans love dogs! 44 of U.S. households have a dog, which equates to 55.3 million homes" },
	{
		fact: 'Move over Rover! 45 of dogs sleep in their owner’s bed "we’re pretty sure a large percentage also hog the blankets!" ',
	},
	{
		fact: "Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth.",
	},
	{ fact: "Yummy! Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473." },
	{
		fact: "Watch that plate of cookies! A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans.",
	},
	{
		fact: "It’s not so black and white. It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray.",
	},
	{
		fact: 'Did you hear that? Sound frequency is measured in Hertz "Hz"}. The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz.',
	},
	{
		fact: "Express yourself. Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements.",
	},
	{
		fact: "Growing up. While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.",
	},
	{
		fact: "Why do they do that? When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory.",
	},
	{
		fact: "No, it’s not just to make themselves look adorable. Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators.",
	},
	{
		fact: "Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.",
	},
	{
		fact: "Some stray Russian dogs have figured out how to use the subway system in order to travel to more populated areas in search of food.",
	},
	{
		fact: "Dogs don't enjoy being hugged as much as humans and other primates. Canines interpret putting a limb over another animal as a sign of dominance.",
	},
	{
		fact: "Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers.",
	},
	{
		fact: 'The Beatles song "A day in the Life" has an extra high-pitched whistle, audible only to dogs. It was recorded by Paul McCartney for the enjoyment of his Shetland sheepdog.',
	},
	{
		fact: "This pup, Nesbit, earned over one million Delta airline miles in his life and had his own frequent flier card.",
	},
	{
		fact: "One of Michael Vick's former fighting dogs, Leo, went on to be a therapy dog who comforted dying children.",
	},
	{
		fact: "Service dogs are trained to know when they are on duty. When their harness is on, they know it's business time. When you take it off, the pups immediately become playful and energetic.",
	},
	{
		fact: "Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
	},
	{
		fact: 'Seeing eye dogs pee and poo on command so that their owners can clean up after them. "The command is usually "Get busy!" and pups will pace back and forth until they do their business. Male dogs are also trained to do their business without lifting their leg.',
	},
	{
		fact: "n ancient China, an emperor's last line of defense was a small Pekingese dog literally hidden up his sleeve.",
	},
	{
		fact: "When Lord Byron was informed that his dog was not allowed to come with him to Cambridge Trinity College, he retaliated by bringing a bear instead.",
	},
	{
		fact: "In 1860's San Francisco, two stray dogs who were best friends became local celebrities. Their exploits were celebrated in local papers and they were granted immunity from the city's dog catchers.",
	},
	{ fact: "There is a dog-shaped building in New Zealand." },
	{
		fact: "This dog, Naki'o, lost all of his legs to frostbite in Colorado, but now has four prosthetic legs and can run around like normal.",
	},
	{ fact: "The wetness of a dog's nose is essential for determining what direction a smell is coming from." },
	{ fact: "Hyenas aren't actually dogs. They are more closely related to cats." },
	{
		fact: "Spiked dog collars were invented in ancient Greece and were originally designed to protect dogs throats from wolf attacks.",
	},
	{
		fact: "Baks the blind boxer has a seeing eye goose named Buttons. Buttons the four-year-old goose leads her pup around everywhere either by hanging onto him with her neck, or by honking to tell him which way to go.",
	},
	{
		fact: "'Frito Feet' is the name of the phenomenon in which the bacteria on a dog's paws cause them to smell like corn chips. Because a pup's feet are in constant contact with the ground, they pick up tons of microorganisms in their paws. When dogs cool off by sweating through the pads of their feet, the combo of moisture and bacteria releaces a nutty, popcorn-like aroma. Basically it's dog B.O.",
	},
	{
		fact: "It is a myth that dogs are color blind. They can actually see in color, just not as vividly as humans. It is akin to our vision at dusk.",
	},
	{
		fact: "Dogs DO have better low-light vision than humans because of a special light-reflecting layer behind their retinas.",
	},
	{ fact: "A German Shepherd guide dog led her blind companion the entire 2,100 mile Appalachian Trail." },
	{
		fact: "If never spayed or neutered, a female dog, her mate, and their puppies could produce over 66,000 dogs in 6 years!",
	},
	{ fact: "Dogs’ only sweat glands are between their paw pads." },
	{ fact: "Like human babies, Chihuahuas are born with a soft spot in their skull which closes with age." },
	{ fact: "The breed Lundehune has 6 toes and can close its ears." },
	{ fact: "Teddy Roosevelt’s dog, Pete, ripped a French ambassador’s pants off at the White House." },
	{ fact: "President Lyndon Johnson had two beagles named Him and Her." },
	{ fact: "Franklin Roosevelt spent $15,000 for a destroyer to pick up his Scottie in the Aleutian Islands." },
	{ fact: "In Roman times, mastiffs donned light armor and were sent after mounted knights." },
	{ fact: "The Russians trained dogs during WWII to run suicide missions with mines strapped to their backs." },
	{
		fact: "A dog’s mouth exerts 150–200 pounds of pressure per square inch with some dogs exerting up to 450 pounds per square inch.",
	},
	{ fact: "A one year old dog is as physically mature as a 15 year old human." },
	{ fact: "The U.S. has the highest dog population in the world." },
	{ fact: "France has the 2nd highest dog population." },
	{ fact: "The average city dog lives 3 years longer than a country dog." },
	{
		fact: "Eighty-seven percent of dog owners say their dog curls up beside them or at their feet while they watch T.V.",
	},
	{ fact: "Dogs can be trained to detect epileptic seizures in humans." },
	{ fact: "Fifteen people die in the U.S. every year from dog bites." },
	{ fact: "In 2002 alone, more people in the U.S. were killed by dogs than by sharks in the past 100 years." },
	{ fact: "Gidget is the name of the Taco Bell dog." },
	{ fact: "Newfoundlands are great swimmers because of their webbed feet." },
	{ fact: "Basset Hounds cannot swim." },
	{ fact: "Greyhounds are the fastest dogs on earth, with speeds of up to 45 miles per hour." },
	{ fact: "Bingo is the name of the dog on the side of the Cracker Jack box." },
	{ fact: "The bible mentions dogs 14 times." },
	{ fact: "Three dogs survived the sinking of the Titanic: a Newfoundland, a Pomeranian, and a Pekingese." },
	{ fact: "The Labrador Retriever is the #1 favorite breed in the U.S., Canada, and the U.K." },
	{ fact: "Obesity is the #1 health problem among dogs." },
	{
		fact: "An estimated 1,000,000 dogs in the U.S. have been named as the primary beneficiaries in their owner’s will.",
	},
	{
		fact: "An American Animal Hospital Association poll found that 33 of dog owners admit to talking to their dogs on the phone and leaving answering machine messages for them while away.",
	},
	{ fact: "Dogs’ nose prints are as unique as a human’s finger prints, and can be used to accurately identify them." },
	{
		fact: 'At the end of the Beatles’ song "A Day in the Life," a high-pitched dog whistle was recorded by Paul McCartney for his sheepdog.',
	},
	{ fact: "Seventy percent of people sign their pet’s name on greeting and holiday cards." },
	{ fact: "Fifty-eight percent of people put pets in family and holiday portraits." },
	{ fact: "There are only 350 Cisky Terriers in the world, possibly making it the rarest breed." },
	{
		fact: 'The phrase "raining cats and dogs" originated in 17th century England when it is believed that many cats and dogs drowned during heavy periods of rain.',
	},
	{ fact: "Dogs have no sense of time." },
	{ fact: "Humans have kept dogs as pets for over 12,000 years." },
	{ fact: "The largest breed of dog is the Irish Wolfhound." },
	{ fact: "The world’s smallest dog breed is the Chihuahua." },
	{ fact: "The St. Bernard is the heaviest dog breed." },
	{ fact: "Only dogs and humans have prostates." },
	{ fact: "Dogs do not have an appendix." },
	{
		fact: "Every dog on earth likely descended from a species knows as the Tomarctus – a creature that roamed the earth over 15 million years ago.",
	},
	{ fact: "The oldest known breed is likely the Saluki, originally trained by Egyptians to help them track game." },
	{
		fact: "In 1957, Laika became the first living being in space via an earth satellite and JFK’s terrier, Charlie, fathered 4 puppies with Laika’s daughter.",
	},
	{ fact: "An African wolf dog known as the Basenji is the only dog in the world that cannot bark." },
	{ fact: "There are 703 breeds of purebred dogs." },
	{ fact: "Dachshunds were originally bred for fighting badgers." },
	{
		fact: 'The world’s smartest dogs are thought to be "1" the Border Collie, "2" the Poodle, and "3" the Golden Retriever and the dumbest dog is believed to be the Afghan Hound.',
	},
	{ fact: "A dog’s sense of smell is more than 100,000 times stronger than that of a human." },
	{ fact: "Dogs need a strong sense of smell because their eyesight is not as keen as a human’s." },
	{ fact: "Dogs judge objects first by their movement, then by their brightness, and lastly by their shape." },
	{
		fact: 'Chocolate contains a substance known as theobromine "similar to caffeine" which can kill dogs or, at the very least, make them violently ill.',
	},
	{ fact: "George Washington had 36 dogs–all Foxhounds–with one named Sweetlips." },
	{ fact: "All dogs are identical in anatomy, with 321 bones and 42 permanent teeth." },
	{ fact: "Smaller breeds mature faster than larger breeds." },
	{ fact: 'Female dogs are only ready to mate–"in heat"–twice a year for a total of roughly 20 days.' },
	{ fact: "Puppies sleep 90 of the day for their first few weeks." },
	{
		fact: "Rin Tin Tin was the first Hollywood dog star and he really signed his movie contracts – all 22 of them – with a paw-print.",
	},
	{ fact: "Toto in The Wizard of Oz was played by a female Cairn Terrier named Terry." },
	{ fact: "A dog’s vision is not fully developed until after the first month." },
	{ fact: "Dogs have twice as many muscles to move their ears as people." },
	{ fact: "The longer a dog’s nose, the more effective it’s internal cooling system." },
	{
		fact: "An elderly woman was saved by her 12-pound Yorkshire Terrier, who fought off an 80- pound Akita, and survived with only 9 stitches.",
	},
	{
		fact: 'U.S. Customs dogs "Rocky" and "Barco" were so good at patrolling the border that Mexican drug lords put a $300,000 bounty on their heads.',
	},
	{ fact: "Dogs are all direct descendants of wolves." },
	{ fact: "Wolves and dogs can mate to produce fertile offspring." },
	{ fact: "Female wolves have been known to travel great distances to regurgitate full meals for their hungry pups." },
	{ fact: "Cerberus was the tri-headed dog that guarded the underworld in Greek mythology." },
	{ fact: "A dog’s pregnancy lasts for approximately 60 days." },
	{ fact: "Dogs’ sense of hearing is more than ten times more acute than a human’s." },
	{
		fact: "Humans can detect sounds at 20,000 times per second, while dogs can sense frequencies of 30,000 times per second.",
	},
	{ fact: "The earliest dog fossil dates back to nearly 10,000 B.C." },
	{ fact: "Bloodhounds are prized for their ability to single out and identify a number of scents simultaneously." },
	{ fact: "Dalmatian puppies are born completely white." },
	{ fact: "The ancient Chinese carried Pekingese puppies in the sleeves of their robes." },
	{ fact: "Boxers are so named because of their manner of playing using their front paws." },
	{ fact: "All breeds of dog have been found to attack livestock, from 3-month-old puppies to 13-year-old poodles." },
	{
		fact: "A dog’s heart beats up to 120 times per minute, or 50 faster than the average human heartbeat of 80 times per minute",
	},
	{ fact: "The oldest dog on record – a Queensland Heeler named Bluey – was 29 years, 5 months old." },
	{ fact: "Davy Crockett had a dog named Sport." },
	{ fact: "Dogs were first domesticated by cavemen." },
	{ fact: "Dogs live an average of 15 years." },
	{ fact: "Many foot disorders in dogs are simply an issue of too-long toenails." },
	{ fact: "More than 5,000,000 puppies are born in the U.S. every year." },
	{ fact: "More than 1 in 3 American families own a dog." },
	{ fact: "Average body temperature for a dog is 101.2 degrees." },
	{ fact: "The Girl Scouts and Boy Scouts both offer merit badges in dog care." },
	{ fact: "Dogs are natural pack animals." },
	{ fact: "Dogs are naturally submissive to any creature with higher pack status, human or canine." },
	{ fact: "Puppies’ eyes do not fully open until they’re about 12 days old." },
	{ fact: "Dogs with little human contact in the first three months typically don’t make good pets." },
	{ fact: "The Chihuahua was named after the state in Mexico where they were discovered." },
	{
		fact: "The smallest known adult dog was a Yorkshire Terrier that was only 2.5 inches at the shoulder, and weighed only 4 ounces.",
	},
	{ fact: "The largest dog was an English Mastiff who weighed 343 pounds." },
	{ fact: "In 2001, it was estimated that there are approximately 400 million dogs in the world." },
	{ fact: 'In Old England, the word "hound" was used to refer to all types of dogs.' },
	{ fact: 'The process of birthing puppies is called "whelping."' },
	{ fact: 'The famous nickname, "man’s best friend," is used in many other languages as well as English.' },
	{ fact: "Dog’s don’t see in black-and-white, they have 2 color receptors, and can see yellow and blue." },
	{
		fact: "Dog’s definitely don’t see like hawks. They have very poor eyesight, but can distinguish movement 10-20 times better than humans.",
	},
	{ fact: "Even with their poor eyesight, dogs can still see better at night than humans do." },
	{ fact: "Most dogs have 18 or more muscles to tilt, rotate, and move their ears." },
	{
		fact: "While not the best when it comes to sight, dogs have a keen sense of hearing, and can hear sounds at 4 times the distance of humans.",
	},
	{ fact: "At the age of 4 weeks, most dogs have developed the majority of their vocalizations." },
	{ fact: "Most dogs are capable of understanding up to 250 words and gestures." },
	{ fact: "A Border Collie named Chaser has learned the names of 1,022 toys, and can retrieve each by name." },
	{ fact: "Dogs can count up to five and can perform simple mathematical calculations." },
	{ fact: "The average dog is as intelligent as a two-year-old child." },
	{ fact: "It’s been demonstrated that dogs can reduce both physical and emotional anxiety." },
	{ fact: "Dogs have been used since the 1700’s for therapy." },
	{ fact: 'Dogs with a flesh colored nose is said to have a "Dudley Nose."' },
	{ fact: 'Pugs and other dogs with short muzzles have a peculiar head-type known as "Brachycephalic."' },
	{ fact: 'Hound dogs and long-nosed dogs also have a unique name for their head-type: "Dolichocephalic."' },
	{ fact: "Dogs sleep for an average of 10 hours per day." },
	{ fact: "Dogs engage in rapid-eye-movement when they sleep, and have dreams just like humans do." },
	{ fact: "The World Canine Organization recognizes 339 breeds of dogs." },
	{
		fact: 'Analysis of the dog genome demonstrate only 4 major types of dogs: "Old Lineage Dogs," "Mastiff-type Dogs," "Herding Dogs," and "Modern Hunting Dogs".',
	},
	{
		fact: "Unlike cats, dogs are not exclusively carnivores: they can adapt to different foods, and a percentage of their diets can be fruits and vegetables.",
	},
	{ fact: "The French Bulldog is incapable of reproducing naturally." },
	{
		fact: 'In addition to "formal" forms of dog training (operant conditioning, reinforcement, or classical conditioning), dogs are able to learn merely from observation.',
	},
	{
		fact: 'The Saint Bernard gains its name from the "Great St. Bernard Hospice;" the monastery where Barry and other mountain dogs was raised by monks to rescue victims from the snowy Alps.',
	},
	{ fact: 'A Great Dane named "Just Nuisance" is the only dog to have officially enlisted in the Royal Navy.' },
	{
		fact: 'When "Bobbie," a Collie/Shepherd mix, was accidentally abandoned on a family vacation, he traveled 2,551 miles over six months to return to his home.',
	},
	{ fact: "The are 4 constellations named after dogs." },
	{ fact: "The Golden Retriever, one of the most popular dog breeds, was first bred in Scotland in the mid 1800s." },
	{
		fact: 'A couple presidential dogs were Golden Retrievers: "Liberty," the presidential dog of Gerald Ford, and "Victory," Ronald Reagan’s dog.',
	},
	{
		fact: "Flyball, a dog sport consisting of relays, hurdles, and ball retrieving, was developed in the late 60s, and the first tournament was held in 1983.",
	},
	{ fact: 'The current world record for a Flyball race is 14.413 seconds, set by the team "Touch N Go" of Las Vegas.' },
	{ fact: "The Labrador Retriever has been the most popular dog breed since 1991." },
	{
		fact: "The Labrador is so popular, in 2006 there were approximately 3-5 times more Labs as there were German Shepherds or Golden Retrievers.",
	},
	{
		fact: 'One of the most famous Labrador Retrievers was "Endal," an assistance dog recognized as the most decorated dog in the world.',
	},
	{
		fact: "Endal was the first dog to ride on the London Eye (the characteristic ferris wheel in London, England), and was also the first known dog to successfully use a ATM machine.",
	},
	{ fact: "Two Labradors, Lucky and Flo, were the first dogs known for sniffing out pirated DVDs." },
	{ fact: "Search and Rescue dog training begin as games played while puppies." },
	{ fact: "Some Search and Rescue (SaR) Dogs are trained to sniff out humans 1/4 mile away or more." },
	{ fact: "Some dogs have shown remarkable ability to detect certain cancers." },
	{
		fact: "A dog’s powerful sense of smell is frequently called upon to detect anything from mines and explosives to termites and bed bugs.",
	},
	{ fact: "Conservationists have used dogs to find bumblebee hives in order to protect endangered species." },
	{ fact: "Puppies love games such as hide and seek! Hide, then call your pup's name so she can try to find you." },
	{ fact: "Dogs can learn more than 1000 words." },
	{ fact: 'Big happy "helicopter" tail wagging is one sign of a really nice dog' },
	{
		fact: 'Upright, stiff, rapid tail movement is not wagging or "friendly" but indicates a dog who\'s rather excited and focused.',
	},
	{ fact: "Puppies grow to half their body weight in the first four to five months!" },
	{ fact: "Puppies then take a year or more to gain the other half of their body weight." },
	{ fact: "Puppies can sleep 18 to 20 hours a day during that rapid body growth phase." },
	{
		fact: "Dogs sometimes appear to smile -- much like humans -- with open mouth grinning. This may indicate a relaxed, submissive state.",
	},
	{ fact: "Tired puppies get cranky just like little kids. If you have a fussy puppy, try nap time." },
	{ fact: "The fastest breed, the Greyhound, can run up to 44 miles per hour." },
	{ fact: "Perky-eared dogs hear sounds better than floppy-eared dogs." },
	{ fact: "There are about 400 million dogs in the world." },
	{ fact: "The Labrador Retriever is the most popular breed, according to the American Kennel Club." },
	{ fact: "There are hundreds of breeds of dogs." },
	{ fact: "The average dog lives 10 to 14 years." },
	{ fact: "In general, smaller breeds live longer than larger breeds." },
	{ fact: "The world's oldest breed, the Saluki, originated in Egypt around 329 B.C." },
	{
		fact: "According to a study shared by Cornell University, dogs were domesticated between 9,000 and 34,000 years ago.",
	},
	{
		fact: "Thomas Jefferson helped enact a dog tax in Virginia, because he was annoyed that dogs were killing his sheep.",
	},
	{
		fact: 'Stroking dogs and gazing into their eyes releases the "feel good" hormone oxytocin for both people and dogs.',
	},
	{ fact: "Dogs are omnivores -- they eat meat, grains and vegetables." },
	{ fact: "The heaviest breed, the Mastiff, weighs about 200 pounds." },
	{ fact: "More than half of all U.S. presidents have owned dogs." },
	{ fact: "President Calvin Coolidge owned at least a dozen dogs." },
	{ fact: "Just like human fingerprints, no two dogs' nose prints are alike." },
	{ fact: "At about 6 inches, the Chihuahua is the shortest breed." },
	{ fact: "Irish Wolfhounds, the tallest breed, are 30 to 35 inches tall." },
	{ fact: "A Russian dog named Laika was the first animal in space, traveling around Earth in 1957." },
	{
		fact: "Dogs who bark the most: Miniature Schnauzers, Cairn Terriers, Yorkshire Terriers, Fox Terriers and West Highland White Terriers.",
	},
	{ fact: "Puppies have 28 teeth and adult dogs have 42." },
	{ fact: "The best age to bring a puppy home is 8 to 12 weeks." },
	{ fact: "Dogs can see best at dawn and dusk." },
	{
		fact: "Dogs aren't colorblind but their eyes don't have receptors for red. They see in shades of black and white and also in shades of blue and yellow.",
	},
	{
		fact: "New puppies have heat sensors in their noses to help find their moms while their eyes and ears are closed.",
	},
	{ fact: "A dog's sense of smell is reduced by up to 40 percent when he's overheated and panting." },
	{
		fact: "Highly trainable dog breeds like Golden Retrievers, Labrador Retrievers, German Shepherds and Collies are more kid-friendly than some other breeds.",
	},
	{
		fact: "Bichons, Portuguese Water Dogs, Kerry Blue Terriers, Maltese and Poodles are all good choices if you have allergies since they shed less than other breeds.",
	},
	{ fact: "More than one in three U.S. families owns a dog." },
	{ fact: "The average number of puppies in a litter is four to six." },
	{ fact: "There are nearly 14,000 animal shelters and rescue groups across North America." },
	{ fact: 'Service dogs are recognized in the U.S. as "necessary medical equipment."' },
	{
		fact: "Therapy dogs, who bring healing to individuals and families by visiting hospitals schools or retirement homes, differ from service dogs, who assist individuals who have disabilities.",
	},
	{ fact: "The Newfoundland has a water-resistant coat and webbed feet." },
	{
		fact: "As Disney's Cruella De Vil was aware, Dalmatian puppies are born pure white and develop spots as they grow older.",
	},
	{ fact: "Dogs sweat through the pads of their feet." },
	{ fact: "Dogs have three eyelids, including one to keep their eyes moist and protected." },
	{ fact: "Chow Chows are born with pink tongues, which turn blue-black at 8 to 10 weeks." },
	{ fact: "Dogs are pack animals -- they don't enjoy being alone." },
	{ fact: "In ancient China, people kept warm by putting dogs up their sleeves." },
	{ fact: "Dogs who have been spayed or neutered live longer than intact dogs." },
	{ fact: "A bloodhound named Tigger holds the record for the longest ears, each measuring more than 13 inches." },
	{ fact: "Bingo is the name of the dog on the box of Cracker Jacks." },
	{ fact: "In 1969, Lassie was the first animal inducted into the Animal Hall of Fame." },
	{ fact: "The Alaskan Malamute can withstand temperatures as low as 70 degrees below zero." },
	{ fact: "Petting a dog can lower your blood pressure." },
	{ fact: "Stray dogs in Moscow have learned to ride the subway to find food." },
	{ fact: "Over half of dog owners include their dogs in annual holiday photos." },
	{ fact: "Although it was once illegal to keep dogs as pets in Iceland's capital city, the laws have been relaxed." },
	{ fact: "President Lyndon Johnson's beagles were named Him and Her." },
	{ fact: "One unspayed female dog, her mate and their puppies can produce 67,000 puppies in six years." },
	{ fact: "The Basenji is the only barkless dog." },
	{ fact: "Dogs are direct descendants of wolves." },
	{ fact: "Puppies are blind, deaf and toothless when born." },
	{ fact: "Dogs curl up to keep themselves warm and protect vital organs." },
	{ fact: "A dog's sense of smell is 10,000 times stronger than a human's." },
	{ fact: "The Norwegian Lundehund is the only dog with six toes on each foot." },
	{ fact: "Dogs can get jealous when their humans display affection toward someone or something else." },
	{ fact: "Dogs can be trained to detect cancer and other diseases in humans." },
	{ fact: "A dog's whiskers are used as sensing devices." },
	{ fact: "Three of the 12 dogs on the Titanic survived." },
	{ fact: "Your pup reaches his full size between 12 and 24 months." },
	{ fact: "The U.S. has the highest dog population in the world." },
	{ fact: "Rin Tin Tin was the first Hollywood dog star." },
	{ fact: "A dog's average body temperature is 101.2 degrees." },
	{ fact: "Many foot disorders in dogs are caused by long toenails." },
	{ fact: "The Boy Scouts and Girl Scouts both offer merit badges in dog care." },
	{
		fact: "The Berger Picard, Miniature American Shepherd and Lagotto Romagnolo are the newest dog breeds recognized by the American Kennel Club in 2015.",
	},
	{
		fact: 'Paul McCartney of the Beatles recorded a high pitched whistle at the end of "A Day in the Life" for his dog.',
	},
	{ fact: "Max, Jake, Maggie and Molly are the most popular dog names." },
	{ fact: "Spiked dog collars were used to protect dogs' throats from wolf attacks in ancient Greece." },
	{ fact: 'Walt Disney\'s family dog -- named Sunnee -- was the inspiration behind "Lady and the Tramp."' },
	{ fact: "Teams of dogs compete for the fastest time without errors in Flyball races." },
	{
		fact: "A German Shepherd named Orient accompanied her blind owner Bill Irwin as he became the first blind person to through-hike the 2,100-mile Appalachian Trail in 1990.",
	},
	{ fact: "Chihuahuas are born with soft spots in their skulls, just like human babies." },
	{ fact: "Mastiffs wore armor and were sent after mounted knights in Roman times." },
	{
		fact: "National Geographic's Dr. Brady Barr measured a dog's average bite force at 320 pounds of pressure per square inch.",
	},
	{ fact: "Dogs are mentioned in the Bible more than 35 times." },
	{ fact: "Obesity is the top health problem among dogs." },
	{ fact: "Dachshunds were originally bred to fight badgers." },
	{ fact: "President Theodore Roosevelt's Bull Terrier Pete ripped the pants off French Ambassador Jules Jusserand." },
	{ fact: "The Border Collie, Poodle and Golden Retriever are considered the world's smartest dog breeds." },
	{ fact: "Smaller breeds of dogs mature faster than larger breeds." },
	{
		fact: "Dogs have twice as many muscles to move their ears as humans, if you're looking for unusual facts about dogs!",
	},
	{ fact: "Female dogs carry puppies for about nine weeks before birth." },
	{ fact: "Dogs are naturally submissive to any creature with a higher pack status." },
	{ fact: "The Chihuahua was named for the state in northwestern Mexico where they were discovered." },
	{ fact: "Dogs can be taught to count and solve simple math problems." },
	{ fact: "With love and a little patience, dogs can learn to walk backwards, salute and bow." },
	{
		fact: 'Pit bulls have been given a bad rap. BADRAP was started in the San Francisco Bay area on behalf of "pit bulls and their people" and was ranked nationally as a No. 1 high-impact nonprofit for animal welfare.',
	},
	{
		fact: "Revolutionary War soldiers sometimes brought their dogs with them into battle. Such was the case with George Washington and his dog, Sweetlips.",
	},
	{ fact: "The American Water Spaniel was the first hunting breed developed to retrieve from boats." },
	{
		fact: "Dogs have a ligament in the neck which allows them to conserve energy while running long distances following scent trails with their nose to the ground. Many other species have a similar ligament and it is called a Paddywhack.",
	},
	{ fact: "Dogs evolved from an extinct wolf-like creature in Eurasia 40,000 years ago." },
	{ fact: "Some studies believe that dogs started to be domesticated 33,000 years ago." },
	{
		fact: 'Dogs belong to a biological family called the Canidae, a member of this family is called a canid. This is the origin of the adjective "canine" which means "of or like a dog, relating to or characteristic of dogs".',
	},
	{
		fact: "Dogs have a very good sense of smell. The part of a dog’s brain that analyses smell is 40 times larger than a human’s and they can smell 1,000 to 10,000 times better than us.",
	},
	{ fact: "About one-third of a dog’s brain is dedicated to smell." },
	{ fact: "The breed of dog with the best sense of smell is the bloodhound." },
	{ fact: "Dog noses are also very cute and easy to boop." },
	{ fact: "A dog could detect a teaspoon of sugar if you added it to an Olympic-sized swimming pool full of water." },
	{ fact: "Dogs can be trained to detect cancer in humans." },
	{ fact: "Some dogs can tell if a human is about to have an epileptic fit." },
	{
		fact: "About 12 percent of the air that a dog breathes goes into a special area in the back of the nose that is dedicated to smelling.",
	},
	{ fact: "A dog can both sniff and breathe at the same time." },
	{ fact: "Dogs know from which nostril a smell has entered." },
	{
		fact: "Dogs can use their sense of smell to gauge our emotions, they can smell fear, anxiety, even sadness. This is because they can smell hormones such as adrenaline.",
	},
	{ fact: "Police dogs can smell human bodies even when they are buried up to 3 meters in the ground." },
	{ fact: "Dogs see in colors of various shades of blue and yellow." },
	{ fact: "If you want a dog to see things in a green background the best color is blue." },
	{ fact: "Humans generally see better than dogs, but dogs see much better when there is low-light." },
	{ fact: "Dogs cannot distinguish between red and green as these colors would appear as shades of grey to a dog." },
	{
		fact: "Dogs like to chew bones but cooked bones and bones that can splinter such as cooked chicken bones should not be given to dogs.",
	},
	{ fact: "When dogs were evolving, bone marrow could sometimes form an important part of their diet." },
	{ fact: "Dogs often bury bones so that they can dig them up at some moment in the future when they are hungry." },
	{ fact: "Chocolate is poisonous to dogs because it contains theobromine." },
	{
		fact: "Although dogs have some sweat glands in their feet, their principal way of losing heat when they are too hot is by panting.",
	},
	{
		fact: "When dogs have been doing a lot of exercise, they pant. It is not because they are out of breath like a human would be. Dogs have developed the method of losing heat by panting because sweating would not be very efficient due to all the fur.",
	},
	{
		fact: "The normal body temperature of a dog is 100.94 degrees Fahrenheit (38.3 Celsius) to 102.56 F (39.2 C) whereas human normal body temperature 98.6 F (37 C).",
	},
	{
		fact: "Female dogs can get pregnant when their bodies undergo changes which make them receptive to male dogs. This is called being on heat or in estrus.",
	},
	{ fact: "Male dogs know the female is in heat due to a smell emitted from the female dog." },
	{ fact: "Most dogs go in heat every 6 months and estrus lasts between 7 and 18 days." },
	{
		fact: "When dogs copulate, it is very normal for them to get stuck together and it may last for up to 45 minutes.",
	},
	{ fact: "Most vets recommend that female dogs don’t get pregnant until the third estrus." },
	{
		fact: "Pregnancy can be prevented by spaying the female dog, this involves removing both the ovaries and the uterus.",
	},
	{ fact: "Dogs don’t go into menopause and will continue to go on heat indefinitely unless they are spayed." },
	{ fact: "Male dogs have a bone in their penis." },
	{ fact: "Wolves and dogs can mate to produce fertile offspring." },
	{ fact: "Dogs normally have between one to sixteen or even more puppies." },
	{
		fact: "It is not possible to know how many puppies a dog will have just by looking. The appearance can be very deceptive.",
	},
	{
		fact: "Puppies are born deaf and cannot hear until they are about 21 days old. The young are born small, blind and helpless and require a long period of parental care.",
	},
	{ fact: "Most dogs have 42 teeth." },
	{ fact: 'Corgi is Welsh for "dwarf dog".' },
	{ fact: "Greyhounds can reach a speed of up to 45 miles per hour." },
	{ fact: "The most popular breed of domestic dog in the US and the UK is the Labrador Retriever." },
	{
		fact: "The border collie or sheep dog is often considered to be the most intelligent breed of dog some of them have been trained to recognize the words for up to 1,000 objects and retrieved them by verbal command.",
	},
	{ fact: "Dogs can discriminate the emotional expressions of human faces." },
	{ fact: "The largest breed of dog is the Irish Wolfhound." },
	{ fact: "Dogs do not have an appendix. Why haven’t humans gotten rid of theirs yet?" },
	{ fact: "Dogs are all direct descendants of wolves." },
	{
		fact: "A dog’s heart beats up to 120 times per minute, or 50 faster than the average human heartbeat of 80 times per minute.",
	},
];

/*Data from: https://github.com/DukeNgn/Dog-facts-API/blob/master/data.json*/

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send("Conectado!");
});

app.get("/all-facts", (req, res) => {
	res.status(200).json(dogFacts);
});

app.listen(process.env.PORT, () => {
	console.log("Accede al servidor desde el puerto " + process.env.PORT);
});
