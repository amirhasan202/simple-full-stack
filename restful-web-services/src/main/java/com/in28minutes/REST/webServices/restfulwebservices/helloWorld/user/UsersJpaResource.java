package com.in28minutes.REST.webServices.restfulwebservices.helloWorld.user;

import java.net.URI;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.REST.webServices.restfulwebservices.jpa.PostRepository;
import com.in28minutes.REST.webServices.restfulwebservices.jpa.UserRepository;

import jakarta.validation.Valid;

@RestController
public class UsersJpaResource
{
	
	private UserDaoServices service;
	
	private UserRepository repository;
	
	private PostRepository postRepository;
	
	public UsersJpaResource ( UserRepository repository , PostRepository postRepository)
	{
		this .postRepository = postRepository;
		this.repository=repository;
	}
	
	@GetMapping("/jpa/users")
	public List<User> retrieveAllUsers()
	{
		return repository.findAll();
	}
	
	//Entity Model
	//web MVC link Builder
	
	@GetMapping("/jpa/users/{id}")
	public EntityModel<User> retrieveOneUser(@PathVariable int id)
	{
		
		User user= service.findOneUser(id);
		
		
		EntityModel<User> entityModel=EntityModel.of(user);
		
		WebMvcLinkBuilder link = linkTo(methodOn(this.getClass()).retrieveAllUsers());
		
		entityModel.add(link.withRel("all-users"));
		
		return entityModel;
	
	}
	
	@PostMapping ("/jpa/users")
	public void createUser(@Valid @RequestBody User user)
	{
		service.save(user);
	}
	
	
	@GetMapping("/jpa/users/{id}/posts")
	public List<Post> retrievePostsForUsers(@PathVariable int id) throws UserPrincipalNotFoundException
	{
		Optional<User> user = repository.findById(id);
		
		if (user.isEmpty())
			throw new UserPrincipalNotFoundException("ID"+id);
		
		
		return user.get().getPost();
	}
	
	@PostMapping("/jpa/users/{id}/posts")
	public ResponseEntity<Object> createPostsForUser(@PathVariable int id , @Valid @RequestBody Post post) throws UserPrincipalNotFoundException
	{
		Optional<User> user = repository.findById(id);
		
		if (user.isEmpty())
			throw new UserPrincipalNotFoundException("ID : "+id);
		
		post.setUser(user.get());
		
		Post savedPost = postRepository.save(post);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(savedPost.getId())
				.toUri();
		
		return ResponseEntity.created(location).build();
		
	}


	
	@DeleteMapping ("/jpa/users/{id}")
	public void deleteUser(@PathVariable int id)
	{
		service.deleteById(id);
	}
}
